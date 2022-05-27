import SpotifyHeader from '../../components/SpotifyHeader'
import SongDetails from '../../components/SongDetails'

import {
   SpotifySpecificMainContainer,
   TableHeader,
   TableName,
   SongAndTableContainer,
   SpotifyHrLine
} from './styledComponents'

const SpotifySpecificPlayList = () => (
   <SpotifySpecificMainContainer>
      <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
      <SongAndTableContainer>
         <SongDetails />
         <TableHeader>
            <TableName width='56px'>#</TableName>
            <TableName width='258px'>Track </TableName>
            <TableName width='300px'>Album</TableName>
            <TableName width='200px'>Time</TableName>
            <TableName width='250px'>Artist</TableName>
            <TableName width='200px'>Added</TableName>
         </TableHeader>
         <SpotifyHrLine width='px' />
      </SongAndTableContainer>
   </SpotifySpecificMainContainer>
)

export default SpotifySpecificPlayList
