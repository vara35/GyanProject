import { observable } from 'mobx'

class SpotifyPlayListModel {
   @observable genreImage!: string
   @observable total!: string | number
   @observable name!: string
   @observable id!: string

   constructor(playlistDetails) {
      this.genreImage = playlistDetails.images[0].url
      this.total = playlistDetails.tracks.total
      this.name = playlistDetails.name
      this.id = playlistDetails.id
   }
}

export default SpotifyPlayListModel
