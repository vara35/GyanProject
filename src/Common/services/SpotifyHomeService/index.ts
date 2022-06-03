import { GetEditorResponse } from '../../stores/types'

interface SpotifyHomeService {
   getEditorPicks1(): Promise<GetEditorResponse>
}

export default SpotifyHomeService
