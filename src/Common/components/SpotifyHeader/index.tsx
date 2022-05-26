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
   isShowHeaderLogo?: boolean
   marginTop: string
}

const SpotifyHeader = (props: SpotifyHeaderConstants) => {
   const { isShowHeaderLogo, marginTop } = props
   return (
      <HeaderMainContainer>
         {isShowHeaderLogo && (
            <HeaderLogo src={SpotifyHeaderConstants.headerLogoUrl} />
         )}
         <IconsContainer marginTop={marginTop}>
            <HeaderIconsContainer>
               <BsFillPersonFill className='person-icon' />
               <ProfileName>{SpotifyHeaderConstants.profileText}</ProfileName>
            </HeaderIconsContainer>
            <HeaderIconsContainer>
               <AiFillHome className='person-icon' />
               <ProfileName>{SpotifyHeaderConstants.home}</ProfileName>
            </HeaderIconsContainer>
            <HeaderIconsContainer>
               <FaItunesNote className='person-icon' />
               <ProfileName>{SpotifyHeaderConstants.yourMusic}</ProfileName>
            </HeaderIconsContainer>
            <HeaderIconsContainer>
               <RiPlayListFill className='person-icon' />
               <ProfileName>{SpotifyHeaderConstants.playLists}</ProfileName>
            </HeaderIconsContainer>
         </IconsContainer>
      </HeaderMainContainer>
   )
}

export default SpotifyHeader
