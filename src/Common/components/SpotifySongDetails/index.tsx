import { Link } from 'react-router-dom'

import { BiLeftArrowAlt } from 'react-icons/bi'
import { observer } from 'mobx-react'

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

const textObj = {
   back: 'Back',
   artistText: 'Mickey J. Meyer'
}

interface SongDetailsProps {
   songDetailsData: any
   songDetailsText: string
}

const SpotifySongDetails = observer((props: SongDetailsProps) => {
   const { songDetailsData, songDetailsText } = props
   const { name, songDetailsUrl } = songDetailsData

   const editedSongText = name.slice(0, 20)

   return (
      <SongDetailsMainContainer>
         <Link to='/spotifyhome'>
            <LeftArrowAndBackTextContainer>
               <BiLeftArrowAlt className='left-arrow' />
               <BackTextButton type='button'>{textObj.back}</BackTextButton>
            </LeftArrowAndBackTextContainer>
         </Link>
         <AlbumAndSongContainer>
            <AlbumProfile src={songDetailsUrl} />
            <AlbumNameContainer>
               <EditorTextEle>{songDetailsText}</EditorTextEle>
               <AlbumName>{editedSongText}</AlbumName>
               <EditorTextEle>{textObj.artistText}</EditorTextEle>
            </AlbumNameContainer>
         </AlbumAndSongContainer>
      </SongDetailsMainContainer>
   )
})

export default SpotifySongDetails
