import { Link, withRouter } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaItunesNote } from 'react-icons/fa'
import { RiPlayListFill } from 'react-icons/ri'

import {
   HeaderIconsContainer,
   HeaderLogo,
   HeaderMainContainer,
   ProfileName,
   IconsContainer,
   IconsContainer1,
   IconsContainer2,
   IconsContainer3
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
   addStyles?: any
   passProps?: any
}

const SpotifyHeader = (props: SpotifyHeaderConstants) => {
   const { isShowHeaderLogo, marginTop, passProps } = props

   const { location } = passProps
   const { pathname } = location

   return (
      <HeaderMainContainer>
         {isShowHeaderLogo && (
            <Link to='/'>
               <HeaderLogo src={SpotifyHeaderConstants.headerLogoUrl} />
            </Link>
         )}
         <IconsContainer marginTop={marginTop}>
            <Link to='/profile' className='link'>
               <IconsContainer1 pathname={pathname}>
                  <BsFillPersonFill className='person-icon' />
                  <ProfileName>
                     {SpotifyHeaderConstants.profileText}
                  </ProfileName>
               </IconsContainer1>
            </Link>
            <Link to='/' className='link'>
               <HeaderIconsContainer pathname={pathname}>
                  <AiFillHome className='person-icon' />
                  <ProfileName>{SpotifyHeaderConstants.home}</ProfileName>
               </HeaderIconsContainer>
            </Link>
            <Link to='/yourmusic' className='link'>
               <IconsContainer2 pathname={pathname}>
                  <FaItunesNote className='person-icon' />
                  <ProfileName marginLeft='20px'>
                     {SpotifyHeaderConstants.yourMusic}
                  </ProfileName>
               </IconsContainer2>
            </Link>
            <Link to='/playlist' className='link'>
               <IconsContainer3 pathname={pathname}>
                  <RiPlayListFill className='person-icon' />
                  <ProfileName>{SpotifyHeaderConstants.playLists}</ProfileName>
               </IconsContainer3>
            </Link>
         </IconsContainer>
      </HeaderMainContainer>
   )
}

export default SpotifyHeader
