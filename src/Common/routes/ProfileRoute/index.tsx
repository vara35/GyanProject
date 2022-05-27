import { Component } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { inject, observer } from 'mobx-react'

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
   name: string
   followers: number
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
      const { userDetails } = profileStore
      const { name, followers } = userDetails

      const followerText = 'Followers'
      const playlistNum = 20
      const playListText = 'playList'
      const logoutButton = 'LOGOUT'

      return (
         <ProfileContainer>
            <SpotifyHeader marginTop='295px' isShowHeaderLogo={true} />
            <UserDetailsContainer>
               <BsFillPersonFill className='profile-icon' />
               <UserName>{name}</UserName>
               <FollowersAndPlayListContainer>
                  <FollowersContainer>
                     <FollowersCount>{followers}</FollowersCount>
                     <FollowersText>{followerText}</FollowersText>
                  </FollowersContainer>
                  <FollowersContainer>
                     <FollowersCount>{playlistNum}</FollowersCount>
                     <FollowersText>{playListText}</FollowersText>
                  </FollowersContainer>
               </FollowersAndPlayListContainer>
               <LogoutButton typep='button'>{logoutButton}</LogoutButton>
            </UserDetailsContainer>
         </ProfileContainer>
      )
   }
}

export default Profile
