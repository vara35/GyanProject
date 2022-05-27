import SpotifyHeader from '../../components/SpotifyHeader'
import SongDetails from '../../components/SongDetails'

import { SpotifySpecificMainContainer } from './styledComponents'

const SpotifySpecificPlayList = () => (
   <SpotifySpecificMainContainer>
      <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
      <SongDetails />
   </SpotifySpecificMainContainer>
)

export default SpotifySpecificPlayList
