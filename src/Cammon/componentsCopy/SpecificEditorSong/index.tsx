import { formatDistance, subDays } from 'date-fns'
import { TableName } from '../../routes/SpotifyEditorPlayList/styledComponents'

import {
   EditorSongListContainer,
   EditorSongButtonEle,
   PopularityImage
} from './styledComponents'

interface SpecificEditorSongProps {
   songDetailsProps: {
      id: string
      songName: string
      duration: string
      albumName?: string
      artist: string
      addedAt?: string
      trackNumber?: string
      previewUrl: string
      popularity?: number
      songThumbnialUrl?: any
   }
   changeSongStatus: (
      previewUrl: string,
      songName: string,
      artist: string,
      playerUrl: string,
      id: string
   ) => void
   isSongs: boolean
   tabId?: string
}

const SpecificEditorSong = (props: SpecificEditorSongProps) => {
   const { songDetailsProps, changeSongStatus, isSongs = true, tabId } = props
   const {
      id,
      songName,
      duration,
      albumName,
      artist,
      addedAt,
      trackNumber,
      previewUrl,
      popularity,
      songThumbnialUrl
   } = songDetailsProps

   const editedSongName =
      songName !== undefined && songName !== null && songName.slice(0, 40)
   const editedAlbumName =
      albumName !== undefined && albumName !== null && albumName.slice(0, 30)
   const editedYear = addedAt !== undefined && addedAt.slice(0, 10)

   // const editedMonth = new Date(editedYear).getDate()
   // const editedDay = addedAt !== undefined && addedAt.slice(8, 10)
   // const result = formatDistance(new Date(2015, 0, 1, 0, 0, 15), new Date())
   // const convertDate = new Date(result)

   const popularityImage =
      popularity !== undefined && popularity > 50
         ? 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921036/Group_188_ln78zc.png'
         : 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921028/Group_183_xwydvw.png'
   const isBgColor = tabId === id

   const changeSong = () => {
      changeSongStatus(previewUrl, songName, artist, songThumbnialUrl, id)
   }

   const getDuration = () => {
      const convertToSeconds = parseInt(duration) / 1000
      const convertToMinutes = convertToSeconds / 60
      const slicedTime = convertToMinutes.toString().slice(0, 4)
      return slicedTime
   }

   const showNewReleaseSongs = () => (
      <>
         <TableName width='48px'>{trackNumber}</TableName>
         <TableName width='500px'>{editedSongName} </TableName>
         <TableName width='430px'>{getDuration()}</TableName>
         <PopularityImage width='300px' src={popularityImage} />
      </>
   )

   const showEdiotorSongs = () => (
      <>
         <TableName width='56px'>{trackNumber}</TableName>
         <TableName width='258px'>{editedSongName} </TableName>
         <TableName width='300px'>{editedAlbumName}</TableName>
         <TableName width='200px'>{getDuration()}</TableName>
         <TableName width='250px'>{artist}</TableName>
         <TableName width='200px'>{editedYear}</TableName>
      </>
   )

   return (
      <EditorSongListContainer onClick={changeSong} bgColor={isBgColor}>
         {isSongs ? showEdiotorSongs() : showNewReleaseSongs()}
      </EditorSongListContainer>
   )
}

export default SpecificEditorSong
