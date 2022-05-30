import { Link } from 'react-router-dom'

import { BiLeftArrowAlt } from 'react-icons/bi'
import { observer, inject } from 'mobx-react'

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

interface SongDetailsProps {
   specificPlayListStore?: any
}

const SongDetails = observer((props: SongDetailsProps) => {
   const { specificPlayListStore } = props
   const { name, songDetailsUrl } = specificPlayListStore.songDetailsData
   console.log(name)

   return (
      <SongDetailsMainContainer>
         <Link to='/spotifyhome'>
            <LeftArrowAndBackTextContainer>
               <BiLeftArrowAlt className='left-arrow' />
               <BackTextButton type='button'>Back</BackTextButton>
            </LeftArrowAndBackTextContainer>
         </Link>
         <AlbumAndSongContainer>
            <AlbumProfile src={songDetailsUrl} />
            <AlbumNameContainer>
               <EditorTextEle>Editors picks</EditorTextEle>
               <AlbumName>{name}</AlbumName>
               <EditorTextEle>Mickey J. Meyer</EditorTextEle>
            </AlbumNameContainer>
         </AlbumAndSongContainer>
      </SongDetailsMainContainer>
   )
})

export default SongDetails
