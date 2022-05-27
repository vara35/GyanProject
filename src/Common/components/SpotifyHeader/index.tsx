import { Link, withRouter, useParams } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaItunesNote } from 'react-icons/fa'
import { RiPlayListFill } from 'react-icons/ri'

import {
   HeaderIconsContainer,
   HeaderLogo,
   HeaderMainContainer,
   ProfileName,
   IconsContainer
} from './styledComponents'
import './index.css'

const SpotifyHeaderConstants = {
   headerLogoUrl:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1653478237/Vector_v5j9mg.png',
   profileText: 'Profile',
   home: 'Home',
   yourMusic: 'Your Music',
   playLists: 'Playlists'
}

interface SpotifyHeaderConstants {
   isShowHeaderLogo: boolean
   marginTop: string
   marginLeft?: string
}

const SpotifyHeader = (props: SpotifyHeaderConstants) => {
   const { isShowHeaderLogo, marginTop, marginLeft = '26px' } = props

   return (
      <HeaderMainContainer>
         {isShowHeaderLogo && (
            <Link to='/spotifyhome'>
               <HeaderLogo src={SpotifyHeaderConstants.headerLogoUrl} />
            </Link>
         )}
         <IconsContainer marginTop={marginTop}>
            <Link to='/profile'>
               <HeaderIconsContainer>
                  <BsFillPersonFill className='person-icon' />
                  <ProfileName>
                     {SpotifyHeaderConstants.profileText}
                  </ProfileName>
               </HeaderIconsContainer>
            </Link>
            <Link to='/spotifyhome'>
               <HeaderIconsContainer>
                  <AiFillHome className='person-icon' />
                  <ProfileName>{SpotifyHeaderConstants.home}</ProfileName>
               </HeaderIconsContainer>
            </Link>
            <Link to='/yourmusic'>
               <HeaderIconsContainer>
                  <FaItunesNote className='person-icon' />
                  <ProfileName marginLeft='20px'>
                     {SpotifyHeaderConstants.yourMusic}
                  </ProfileName>
               </HeaderIconsContainer>
            </Link>
            <Link to='/playlist'>
               <HeaderIconsContainer>
                  <RiPlayListFill className='person-icon' />
                  <ProfileName>{SpotifyHeaderConstants.playLists}</ProfileName>
               </HeaderIconsContainer>
            </Link>
         </IconsContainer>
      </HeaderMainContainer>
   )
}

export default SpotifyHeader
