import { YourMusicResponse } from '../../stores/types'

interface SpotifyYourMusicService {
   getyourMusicData(): Promise<YourMusicResponse>
}

export default SpotifyYourMusicService
