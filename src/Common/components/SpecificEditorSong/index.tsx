import { TableName } from '../../routes/SpotifySpecificPlayList/styledComponents'

import {
   EditorSongListContainer,
   EditorSongButtonEle
} from './styledComponents'

interface SpecificEditorSongProps {
   songDetailsProps: {
      id: string
      songName: string
      duration: string
      albumName: string
      artist: string
      addedAt: string
      trackNumber: string
      previewUrl: string
   }
   changeSongStatus: (
      previewUrl: string,
      songName: string,
      artist: string
   ) => void
}

const SpecificEditorSong = (props: SpecificEditorSongProps) => {
   const { songDetailsProps, changeSongStatus } = props
   const {
      id,
      songName,
      duration,
      albumName,
      artist,
      addedAt,
      trackNumber,
      previewUrl
   } = songDetailsProps

   const editedSongName = songName.slice(0, 40)
   const editedAlbumName = albumName.slice(0, 30)

   const changeSong = () => {
      changeSongStatus(previewUrl, songName, artist)
   }

   return (
      <EditorSongListContainer onClick={changeSong}>
         <TableName width='56px'>{trackNumber}</TableName>
         <TableName width='258px'>{editedSongName} </TableName>
         <TableName width='300px'>{editedAlbumName}</TableName>
         <TableName width='200px'>{duration}</TableName>
         <TableName width='250px'>{artist}</TableName>
         <TableName width='200px'>{addedAt}</TableName>
      </EditorSongListContainer>
   )
}

export default SpecificEditorSong
