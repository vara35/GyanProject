import { action, observable } from 'mobx'
import Cookies from 'js-cookie'

import SpotifyPlayListModel from '../models/SpotifyPlayListModel'

const playListApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}
const username = 'he7oc7sesmn4j2jvhfq1ddqxr'
class PlayListStore {
   @observable playListStatus = playListApiConstants.initial
   @observable playListData: any = []
   spotifyPlayListServiceData
   constructor(spotifyPlayListService) {
      this.spotifyPlayListServiceData = spotifyPlayListService
   }

   @action getPlayListData = async () => {
      this.playListStatus = playListApiConstants.in_Progress

      this.playListData = []

      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/users/${username}/playlists?limit=50`
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await this.spotifyPlayListServiceData.getPlayListData(
         url,
         options
      )
      const data = await response.json()
      if (response.ok) {
         const updatedPlayListData = data.items.map(eachSong => {
            const playListItem = new SpotifyPlayListModel(eachSong)
            this.playListData.push(playListItem)
         })
         this.playListStatus = playListApiConstants.success
      } else {
         this.playListStatus = playListApiConstants.failure
      }
   }
}

export default PlayListStore
