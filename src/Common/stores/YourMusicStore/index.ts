import { observable } from 'mobx'
import Cookies from 'js-cookie'

const yourMusicApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class YourMusicStore {
   @observable yourMusicSongsData = []
   @observable yourMusicStatus = yourMusicApiConstants.initial

   @observable getYourMusicdata = async () => {
      this.yourMusicStatus = yourMusicApiConstants.in_Progress
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/me/tracks`
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
         const updatedYourMusicData = data.items.map(eachSong => ({
            id: eachSong.track.id,
            yourMusicSongName: eachSong.track.name,
            yourMusicArtist:
               eachSong.track.artists[0] !== undefined
                  ? eachSong.track.artists[0].name
                  : 'unknown',
            movieName: eachSong.track.album.name,
            yourMusicImageUrl: eachSong.track.album.images[0].url,
            duration: eachSong.track.duration_ms,
            previewUrl: eachSong.track.preview_url
         }))
         this.yourMusicSongsData = updatedYourMusicData
         this.yourMusicStatus = yourMusicApiConstants.success
      } else {
         this.yourMusicStatus = yourMusicApiConstants.failure
      }
   }
}

export default YourMusicStore
