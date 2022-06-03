import { observable } from 'mobx'

class SpotifyYourMusicModel {
   @observable id!: string
   @observable yourMusicSongName!: string
   @observable yourMusicArtist!: string
   @observable movieName!: string
   @observable yourMusicImageUrl!: string
   @observable duration!: string
   @observable previewUrl!: string

   constructor(yourMusicDetails) {
      this.id = yourMusicDetails.track.id
      this.yourMusicSongName = yourMusicDetails.track.name
      this.yourMusicArtist =
         yourMusicDetails.track.artists[0] !== undefined
            ? yourMusicDetails.track.artists[0].name
            : 'unknown'
      this.movieName = yourMusicDetails.track.album.name
      this.yourMusicImageUrl = yourMusicDetails.track.album.images[0].url
      this.duration = yourMusicDetails.track.duration_ms
      this.previewUrl = yourMusicDetails.track.preview_url
   }
}

export default SpotifyYourMusicModel
