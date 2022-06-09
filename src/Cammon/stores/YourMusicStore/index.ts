import { observable } from 'mobx'
import Cookies from 'js-cookie'
import SpotifyYourMusicModel from '../models/SpotifyYourMusicModel'

const yourMusicApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class YourMusicStore {
   @observable yourMusicSongsData: any = []
   @observable yourMusicStatus = yourMusicApiConstants.initial
   spotifyYourMusicServiceData
   constructor(SpotifyYourMusicService) {
      this.spotifyYourMusicServiceData = SpotifyYourMusicService
   }

   @observable getYourMusicdata = async () => {
      this.yourMusicSongsData = []
      this.yourMusicStatus = yourMusicApiConstants.in_Progress
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/me/tracks`
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await this.spotifyYourMusicServiceData.getyourMusicData(
         url,
         options
      )
      const data = await response.json()
      if (response.ok) {
         const updatedYourMusicData = data.items.map(eachSong => {
            const yourMusicModelData = new SpotifyYourMusicModel(eachSong)
            this.yourMusicSongsData.push(yourMusicModelData)
         })
         this.yourMusicStatus = yourMusicApiConstants.success
      } else {
         this.yourMusicStatus = yourMusicApiConstants.failure
      }
   }
}

export default YourMusicStore
