import { observable } from 'mobx'

class SpotifyNewReleaseModel {
   @observable newReleaseImage!: string
   @observable id!: string | number
   @observable name!: string

   constructor(newReleaseDetails) {
      this.newReleaseImage = newReleaseDetails.images[0].url
      this.id = newReleaseDetails.id
      this.name = newReleaseDetails.name
   }
}

export default SpotifyNewReleaseModel
