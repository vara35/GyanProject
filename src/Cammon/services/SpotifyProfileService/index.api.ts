class SpotifyProfileApi {
   getUserDetails = async (url, options) => {
      const response = await fetch(url, options)
      return response
   }
}

export default SpotifyProfileApi
