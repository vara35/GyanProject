import { TableName } from '../../routes/SpotifyCommonRoute/styledComponents'

import { EditorSongListContainer } from './styledComponents'

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
      songThumbnialUrl
   } = songDetailsProps

   const editedSongName =
      songName !== undefined && songName !== null && songName.slice(0, 30)
   const editedAlbumName =
      albumName !== undefined && albumName !== null && albumName.slice(0, 30)
   const editedYear =
      addedAt !== undefined && albumName !== null && addedAt.slice(0, 10)

   const isBgColor = tabId === id

   const changeSong = () => {
      changeSongStatus(songThumbnialUrl, songName, artist, previewUrl, id)
   }

   const getDuration = () => {
      const convertToSeconds = parseInt(duration) / 1000
      const convertToMinutes = convertToSeconds / 60
      const slicedTime = convertToMinutes.toString().slice(0, 4)
      return slicedTime
   }

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
         {showEdiotorSongs()}
      </EditorSongListContainer>
   )
}

export default SpecificEditorSong
