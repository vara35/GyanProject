import { YourMusicResponse } from '../../stores/types'

interface SpotifyPlayListService {
   getPlayListData(): Promise<YourMusicResponse>
}

export default SpotifyPlayListService
