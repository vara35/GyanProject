import { BiLeftArrowAlt } from 'react-icons/bi'

import {
   LeftArrowAndBackTextContainer,
   SongDetailsMainContainer,
   BackTextButton,
   AlbumProfile,
   AlbumNameContainer,
   EditorTextEle,
   AlbumName,
   AlbumAndSongContainer
} from './styledComponents'
import './index.css'

const text = `All Out 90s Telugu`

const SongDetails = () => (
   <SongDetailsMainContainer>
      <LeftArrowAndBackTextContainer>
         <BiLeftArrowAlt className='left-arrow' />
         <BackTextButton type='button'>Back</BackTextButton>
      </LeftArrowAndBackTextContainer>
      <AlbumAndSongContainer>
         <AlbumProfile src='https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png' />
         <AlbumNameContainer>
            <EditorTextEle>Editors picks</EditorTextEle>
            <AlbumName>{text}</AlbumName>
            <EditorTextEle>Mickey J. Meyer</EditorTextEle>
         </AlbumNameContainer>
      </AlbumAndSongContainer>
   </SongDetailsMainContainer>
)

export default SongDetails
