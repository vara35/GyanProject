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
   followers: number | ''
}

@observer
@inject('profileStore')
class Profile extends Component<ProfileConstants> {
   componentDidMount() {
      const { profileStore } = this.props
      profileStore.getUserData()
   }

   render() {
      const { profileStore } = this.props
      const { userDetails } = profileStore
      const { name, followers } = userDetails

      return (
         <ProfileContainer>
            <SpotifyHeader marginTop='295px' isShowHeaderLogo={true} />
            <UserDetailsContainer>
               <BsFillPersonFill className='profile-icon' />
               <UserName>{name}</UserName>
               <FollowersAndPlayListContainer>
                  <FollowersContainer>
                     <FollowersCount>{followers}</FollowersCount>
                     <FollowersText>Followers</FollowersText>
                  </FollowersContainer>
                  <FollowersContainer>
                     <FollowersCount>20</FollowersCount>
                     <FollowersText>playList</FollowersText>
                  </FollowersContainer>
               </FollowersAndPlayListContainer>
               <LogoutButton typep='button'>LogOut</LogoutButton>
            </UserDetailsContainer>
         </ProfileContainer>
      )
   }
}

export default Profile
