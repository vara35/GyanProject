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
   }
}

const SpecificEditorSong = (props: SpecificEditorSongProps) => {
   const { songDetailsProps } = props
   const {
      id,
      songName,
      duration,
      albumName,
      artist,
      addedAt,
      trackNumber
   } = songDetailsProps

   return (
      <EditorSongListContainer>
         <TableName width='56px'>{trackNumber}</TableName>
         <TableName width='258px'>{songName} </TableName>
         <TableName width='300px'>{albumName}</TableName>
         <TableName width='200px'>{duration}</TableName>
         <TableName width='250px'>{artist}</TableName>
         <TableName width='200px'>{addedAt}</TableName>
      </EditorSongListContainer>
   )
}

export default SpecificEditorSong
