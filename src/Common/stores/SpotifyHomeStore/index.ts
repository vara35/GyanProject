import { action, observable } from 'mobx'
import moment from 'moment'
import Cookies from 'js-cookie'

class SpotifyHomeStore {
   @observable editorPicks = []

   @action getEditorPicks = async () => {
      const timestamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=${timestamp}`

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
   }
}

export default SpotifyHomeStore
