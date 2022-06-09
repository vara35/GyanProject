import { YourMusicResponse } from '../../stores/types'

interface SpotifyProfileService {
   getUserDetails(): Promise<YourMusicResponse>
}

export default SpotifyProfileService
