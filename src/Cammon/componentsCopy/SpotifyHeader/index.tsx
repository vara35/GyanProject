import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaItunesNote } from 'react-icons/fa'
import { RiPlayListFill } from 'react-icons/ri'
import 'twin.macro'

import {
   HomeIconContainer,
   HeaderLogo,
   HeaderMainContainer,
   HeaderRouteHeading,
   IconsContainer,
   ProfileContainer,
   YourMusicIconContainer,
   PlayListIconContainer
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
   passProps?: any
   HeaderCss?: any
}

const pathname = ''

const SpotifyHeader = (props: SpotifyHeaderConstants) => {
   const { isShowHeaderLogo, passProps, HeaderCss } = props

   const { location } = passProps
   const { pathname } = location

   return (
      <HeaderMainContainer>
         {isShowHeaderLogo && (
            <Link to='/'>
               <HeaderLogo src={SpotifyHeaderConstants.headerLogoUrl} />
            </Link>
         )}
         <IconsContainer css={HeaderCss}>
            <Link to='/profile' className='link'>
               <ProfileContainer pathname={pathname}>
                  <BsFillPersonFill className='person-icon' />
                  <HeaderRouteHeading>
                     {SpotifyHeaderConstants.profileText}
                  </HeaderRouteHeading>
               </ProfileContainer>
            </Link>
            <Link to='/' className='link'>
               <HomeIconContainer pathname={pathname}>
                  <AiFillHome className='person-icon' />
                  <HeaderRouteHeading>
                     {SpotifyHeaderConstants.home}
                  </HeaderRouteHeading>
               </HomeIconContainer>
            </Link>
            <Link to='/yourmusic' className='link'>
               <YourMusicIconContainer pathname={pathname}>
                  <FaItunesNote className='person-icon' />
                  <HeaderRouteHeading>
                     {SpotifyHeaderConstants.yourMusic}
                  </HeaderRouteHeading>
               </YourMusicIconContainer>
            </Link>
            <Link to='/playlist' className='link'>
               <PlayListIconContainer pathname={pathname}>
                  <RiPlayListFill className='person-icon' />
                  <HeaderRouteHeading>
                     {SpotifyHeaderConstants.playLists}
                  </HeaderRouteHeading>
               </PlayListIconContainer>
            </Link>
         </IconsContainer>
      </HeaderMainContainer>
   )
}

export default SpotifyHeader
