import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class SpecificPlayListStore {
   @observable specificEditorsData = []
   @observable newReleaseData = []
   @observable categoryData = []
   @observable songDetailsData: { name: string; songDetailsUrl: string } = {
      name: '',
      songDetailsUrl: ''
   }
   @observable newReleaseSongDetails: {
      name: string
      songDetailsUrl: string
   } = {
      name: '',
      songDetailsUrl: ''
   }

   @observable categorySongDetails: {
      name: string
      songDetailsUrl: string
   } = {
      name: '',
      songDetailsUrl: ''
   }

   @observable songStatus = songsApiConstants.initial
   @observable categorySongStatus = songsApiConstants.initial
   @observable newReleaseSongStatus = songsApiConstants.initial

   @observable playerThumbnailUrl = ''
   @observable songName = ''
   @observable artistName = ''
   @observable playerSongUrl = ''

   @action getSpecificEditorData = async props => {
      this.songStatus = songsApiConstants.in_Progress
      const { match } = props
      const { params } = match
      const { id } = params

      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/users/spotify/playlists/${id}`
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const specificEditorResponse = await fetch(url, options)
      const editordata = await specificEditorResponse.json()

      if (specificEditorResponse.ok) {
         const songDetails = {
            name: editordata.name,
            songDetailsUrl: editordata.images[0].url
         }
         const updatedEditorData = editordata.tracks.items.map(eachSong => ({
            id: eachSong.track !== null ? eachSong.track.id : 'unknown',
            songName: eachSong.track !== null ? eachSong.track.name : 'unknown',
            duration:
               eachSong.track !== null ? eachSong.track.duration_ms : 'unknown',
            albumName:
               eachSong.track !== null ? eachSong.track.album.name : 'unknown',

            addedAt: eachSong.track !== null ? eachSong.added_at : 'unknown',
            trackNumber: editordata.tracks.items.indexOf(eachSong) + 1,
            previewUrl:
               eachSong.track !== null ? eachSong.track.preview_url : 'unknown',
            songThumbnialUrl:
               eachSong.track !== null
                  ? eachSong.track.album.images[0].url
                  : 'unknown',
            artist:
               eachSong.track !== null &&
               eachSong.track.artists[0].name !== undefined
                  ? eachSong.track.artists[0].name
                  : 'unknown'
         }))
         this.songDetailsData = songDetails
         this.specificEditorsData = updatedEditorData
         this.songStatus = songsApiConstants.success
      } else {
         this.songStatus = songsApiConstants.failure
      }
   }

   @action getCategoryData = async props => {
      this.categorySongStatus = songsApiConstants.in_Progress
      const { match } = props
      const { params } = match
      const { id } = params

      const token = Cookies.get('pa_token')
      const categoryUrl = `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=IN`
      const categoryOptions = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const specificCategoryResponse = await fetch(categoryUrl, categoryOptions)
      const categoryJsonData = await specificCategoryResponse.json()

      if (specificCategoryResponse.ok) {
         const updatedCategoryData = categoryJsonData.playlists.items.map(
            eachSong => ({
               id: eachSong.id,
               genreImage: eachSong.images[0].url,
               name: eachSong.name,
               total: categoryJsonData.playlists.total
            })
         )
         this.categoryData = updatedCategoryData
         this.categorySongStatus = songsApiConstants.success
      } else {
         this.categorySongStatus = songsApiConstants.failure
      }
   }

   @action getNewReleaseData = async props => {
      this.songStatus = songsApiConstants.in_Progress
      const { match } = props
      const { params } = match
      const { id } = params

      const token = Cookies.get('pa_token')
      const newReleaseUrl = `https://api.spotify.com/v1/albums/${id}`
      const newReleaseOptions = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const specificCategoryResponse = await fetch(
         newReleaseUrl,
         newReleaseOptions
      )
      const newReleasedata = await specificCategoryResponse.json()
      if (specificCategoryResponse.ok) {
         const newReleaseSong = {
            name: newReleasedata.name,
            songDetailsUrl: newReleasedata.images[0].url,
            artists: newReleasedata.artists[0].name
         }

         const updatedCategoryData = newReleasedata.tracks.items.map(
            eachSong => ({
               id: eachSong.id,
               duration: eachSong.duration_ms,
               popularity: newReleasedata.popularity,
               songName: eachSong.name,
               songUrl1: eachSong.preview_url,
               trackNumber: newReleasedata.tracks.items.indexOf(eachSong) + 1,
               artists: eachSong.artists[0].name
            })
         )
         this.songDetailsData = newReleaseSong
         this.newReleaseData = updatedCategoryData
         this.songStatus = songsApiConstants.success
      } else {
         this.songStatus = songsApiConstants.failure
      }
   }

   @action changeSong(playerThumbnailUrl, songName, artist, playerSongUrl) {
      this.playerThumbnailUrl = playerThumbnailUrl
      this.songName = songName
      this.artistName = artist
      this.playerSongUrl = playerSongUrl
   }
}

export default SpecificPlayListStore
