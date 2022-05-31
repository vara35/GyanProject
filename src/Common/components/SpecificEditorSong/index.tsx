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
   }
   changeSongStatus: (
      previewUrl: string,
      songName: string,
      artist: string
   ) => void
   isSongs: boolean
}

const SpecificEditorSong = (props: SpecificEditorSongProps) => {
   const { songDetailsProps, changeSongStatus, isSongs = true } = props
   const {
      id,
      songName,
      duration,
      albumName,
      artist,
      addedAt,
      trackNumber,
      previewUrl,
      popularity
   } = songDetailsProps

   const editedSongName = songName !== undefined && songName.slice(0, 40)
   const editedAlbumName = albumName !== undefined && albumName.slice(0, 30)
   const popularityImage =
      popularity !== undefined && popularity > 50
         ? 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921036/Group_188_ln78zc.png'
         : 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921028/Group_183_xwydvw.png'

   const changeSong = () => {
      changeSongStatus(previewUrl, songName, artist)
   }

   const showNewReleaseSongs = () => (
      <>
         <TableName width='48px'>{trackNumber}</TableName>
         <TableName width='500px'>{editedSongName} </TableName>
         <TableName width='430px'>{duration}</TableName>
         <PopularityImage width='300px' src={popularityImage} />
      </>
   )

   const showEdiotorSongs = () => (
      <>
         <TableName width='56px'>{trackNumber}</TableName>
         <TableName width='258px'>{editedSongName} </TableName>
         <TableName width='300px'>{editedAlbumName}</TableName>
         <TableName width='200px'>{duration}</TableName>
         <TableName width='250px'>{artist}</TableName>
         <TableName width='200px'>{addedAt}</TableName>
      </>
   )

   return (
      <EditorSongListContainer onClick={changeSong}>
         {isSongs ? showEdiotorSongs() : showNewReleaseSongs()}
      </EditorSongListContainer>
   )
}

export default SpecificEditorSong
