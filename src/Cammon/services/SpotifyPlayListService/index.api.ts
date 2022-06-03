class SpotifyPlayListApi {
   getPlayListData = async (url, options) => {
      const response = await fetch(url, options)
      return response
   }
}

export default SpotifyPlayListApi
