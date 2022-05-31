import { action, observable } from 'mobx'
import Cookies from 'js-cookie'

const playListApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}
const username = 'he7oc7sesmn4j2jvhfq1ddqxr'
class PlayListStore {
   @observable playListStatus = playListApiConstants.initial
   @observable playListData = []

   @action getPlayListData = async () => {
      this.playListStatus = playListApiConstants.in_Progress

      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/users/${username}/playlists?limit=50`
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if (response.ok) {
         const updatedPlayListData = data.items.map(eachSong => ({
            id: eachSong.id,
            name: eachSong.name,
            genreImage: eachSong.images[0].url,
            total: eachSong.tracks.total
         }))
         this.playListData = updatedPlayListData
         this.playListStatus = playListApiConstants.success
      } else {
         this.playListStatus = playListApiConstants.failure
      }
   }
}

export default PlayListStore
