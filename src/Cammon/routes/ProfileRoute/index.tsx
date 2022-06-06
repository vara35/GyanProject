import { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { inject, observer } from 'mobx-react'
import Cookies from 'js-cookie'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import ProfileStore from '../../stores/ProfileStore'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'

import {
   ProfileContainer,
   UserDetailsContainer,
   UserName,
   FollowersAndPlayListContainer,
   FollowersCount,
   FollowersText,
   FollowersContainer,
   LogoutButton
} from './styledComponents'

import './index.css'

const profileApiConstants = {
   initial: 'INITIAl',
   inProgress: 'INPROGRESS',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

const followerText = 'Followers'
const playlistNum = 20
const playListText = 'playList'
const logoutButton = 'LOGOUT'

interface ProfileConstants {
   profileStore: ProfileStore
   followers: number
   userDetails: {
      name: string
      followers: {
         total: number | string
      }
   }
   history: any
}

@inject('profileStore')
@observer
class Profile extends Component<ProfileConstants> {
   componentDidMount() {
      const { profileStore } = this.props
      profileStore.getUserData()
   }

   removeToken = () => {
      const { history } = this.props
      Cookies.remove('pa_token')
      history.replace('/login')
   }

   profileFailureView = () => <SpotifyApiFailureView />

   profileSuccessView = () => {
      const { profileStore } = this.props
      const { name, followers } = profileStore.userData

      return (
         <UserDetailsContainer>
            <BsFillPersonFill className='profile-icon' />
            <UserName>{name}</UserName>
            <FollowersAndPlayListContainer>
               <FollowersContainer>
                  <FollowersCount>{followers.total}</FollowersCount>
                  <FollowersText>{followerText}</FollowersText>
               </FollowersContainer>
               <FollowersContainer>
                  <FollowersCount>{playlistNum}</FollowersCount>
                  <FollowersText>{playListText}</FollowersText>
               </FollowersContainer>
            </FollowersAndPlayListContainer>
            <LogoutButton type='button' onClick={this.removeToken}>
               {logoutButton}
            </LogoutButton>
         </UserDetailsContainer>
      )
   }

   profileInProgessView = () => <SpotifyLoader />

   showProfile = () => {
      const { profileStore } = this.props
      switch (profileStore.profileApiStatus) {
         case profileApiConstants.inProgress:
            return this.profileInProgessView()
         case profileApiConstants.success:
            return this.profileSuccessView()
         case profileApiConstants.failure:
            return this.profileFailureView()
         default:
            return null
      }
   }

   render() {
      return (
         <ProfileContainer>
            <SpotifyHeader
               marginTop='304px'
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            {this.showProfile()}
         </ProfileContainer>
      )
   }
}

export default Profile
