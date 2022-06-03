import { GetEditorResponse } from '../../stores/types'

interface SpotifyHomeService {
   getHomeDataFromService(): Promise<GetEditorResponse>
}

export default SpotifyHomeService
