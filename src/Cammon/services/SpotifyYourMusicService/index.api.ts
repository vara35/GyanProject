class SpotifyYourMusicApi {
   getyourMusicData = async (url, options) => {
      const response = await fetch(url, options)
      return response
   }
}

export default SpotifyYourMusicApi
