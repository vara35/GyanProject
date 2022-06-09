class SpotifyProfileModel {
   name: string
   followers: { total: string | number }
   constructor(userDetails) {
      this.name = userDetails.display_name
      this.followers = userDetails.followers
   }
}

export default SpotifyProfileModel
