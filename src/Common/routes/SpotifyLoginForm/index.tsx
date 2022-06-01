import { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'

import CounterStore from '../../stores/CounterStore'

import './index.css'

interface MyProps {
   location: {
      hash: string
   }
   counterStore: CounterStore
   history: string
}

@inject('counterStore')
@observer
class SpotifyLoginForm extends Component<MyProps> {
   componentDidMount() {
      const hashKey: any = this.getHashKeyFromLocationAfterLogin()

      if (hashKey.access_token) {
         this.postHashKeyAsMessage(hashKey)
      }

      // this.getMessageAndsetAccessTokenInCookies()
   }

   getHashKeyFromLocationAfterLogin = () => {
      const { location } = this.props
      const { hash } = location
      const hashKey = {}
      const queryParams = new URLSearchParams(window.location.search)
      const error = queryParams.get('error')

      if (error === 'access_denied') {
         window.close()
      }

      hash
         .replace(/^#\/?/, '')
         .split('&')
         .forEach(keyValue => {
            const spl = keyValue.indexOf('=')
            if (spl !== -1) {
               hashKey[keyValue.substring(0, spl)] = keyValue.substring(spl + 1)
            }
         })
      return hashKey
   }

   postHashKeyAsMessage = hashKey => {
      window.opener.postMessage(
         JSON.stringify({
            type: 'access_token',
            access_token: hashKey.access_token,
            expires_in: hashKey.expires_in || 0
         }),
         '*'
      )
      window.close()
      const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000)
      Cookies.set('pa_token', hashKey.access_token, {
         expires: oneHour
      })
      window.location.replace('/')
   }

   getMessageAndsetAccessTokenInCookies = () => {
      window.addEventListener(
         'message',
         event => {
            const hash = JSON.parse(event.data)
            if (hash.type === 'access_token') {
               const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000)
               Cookies.set('pa_token', hash.access_token, {
                  expires: oneHour
               })
               window.location.replace('/')
            }
         },
         false
      )
   }

   isDevelopmentEnvironment = () => {
      if (
         process.env.NODE_ENV === 'development' ||
         window.location.hostname === 'localhost'
      ) {
         return true
      }
      return false
   }

   getRedirectURL = () => {
      if (this.isDevelopmentEnvironment()) {
         return 'http://localhost:3004/spotifyhome'
      }
      return 'https://varaprasad.ccbp.tech/spotifyhome'
   }

   openLoginModal = () => {
      const clientId = '530396f96b1f4c6b81ccccac9f70cf4b'

      const redirectUrl = this.getRedirectURL()

      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-library-read%20user-library-modify%20user-follow-read%20user-follow-modify&state=34fFs29kd09&show_dialog=true`

      const width = 450
      const height = 730
      const left = window.innerWidth / 2 - width / 2
      const top = window.innerHeight / 2 - height / 2

      window.open(
         url,
         'Spotify',
         `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height = ${height}, top = ${top}, left = ${left}`
      )
   }

   submitForm = event => {
      event.preventDefault()
      this.openLoginModal()
   }

   render() {
      const jwt_token = Cookies.get('pa_token')
      if (jwt_token !== undefined) {
         return <Redirect to='/spotifyhome' />
      }
      return (
         <div className='login-form-container'>
            <form className='form-container' onSubmit={this.submitForm}>
               <img
                  src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
                  className='login-website-logo-desktop-image'
                  alt='website logo'
               />
               <button type='submit' className='login-button'>
                  LOG IN SPOTIFY REMIX
               </button>
            </form>
         </div>
      )
   }
}

export default SpotifyLoginForm
