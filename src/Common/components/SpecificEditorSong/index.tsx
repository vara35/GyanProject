import { TableName } from '../../routes/SpotifySpecificPlayList/styledComponents'
import {
   EditorSongListContainer,
   EditorSongButtonEle
} from './styledComponents'

const SpecificEditorSong = () => (
   <EditorSongListContainer>
      <TableName width='56px'>#</TableName>
      <TableName width='258px'>Track </TableName>
      <TableName width='300px'>Album</TableName>
      <TableName width='200px'>Time</TableName>
      <TableName width='250px'>Artist</TableName>
      <TableName width='200px'>Added</TableName>
   </EditorSongListContainer>
)

export default SpecificEditorSong
