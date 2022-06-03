import { observable } from 'mobx'

class SpotifyHomeModel {
   @observable id!: string
   @observable cardImage!: string
   @observable name!: string

   constructor(ediotorDetails) {
      this.cardImage = ediotorDetails.images[0].url
      this.name = ediotorDetails.name
      this.id = ediotorDetails.id
   }
}

export default SpotifyHomeModel
