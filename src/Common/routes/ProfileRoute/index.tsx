import { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { inject, observer } from 'mobx-react'
import Cookies from 'js-cookie'

import SpotifyHeader from '../../components/SpotifyHeader'
import ProfileStore from '../../stores/ProfileStore'

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

   render() {
      const { profileStore } = this.props
      const { name, followers } = profileStore.userData

      const followerText = 'Followers'
      const playlistNum = 20
      const playListText = 'playList'
      const logoutButton = 'LOGOUT'

      const removeToken = () => {
         const { history } = this.props
         Cookies.remove('pa_token')
         history.replace('/login')
      }

      return (
         <ProfileContainer>
            <SpotifyHeader marginTop='295px' isShowHeaderLogo={true} />
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
               <LogoutButton typep='button' onClick={removeToken}>
                  {logoutButton}
               </LogoutButton>
            </UserDetailsContainer>
         </ProfileContainer>
      )
   }
}

export default Profile
