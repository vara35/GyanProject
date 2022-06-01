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

   @observable songUrl = ''
   @observable songName = ''
   @observable artistName = ''
   @observable playerImageURl = ''

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
      console.log(editordata)
      if (specificEditorResponse.ok) {
         const songDetails = {
            name: editordata.name,
            songDetailsUrl: editordata.images[0].url
         }
         const updatedEditorData = editordata.tracks.items.map(eachSong => ({
            id: eachSong.track.id,
            songName: eachSong.track.name,
            duration: eachSong.track.duration_ms,
            albumName: eachSong.track.album.name,
            artist:
               eachSong.track.artists[1] !== undefined
                  ? eachSong.track.artists[1].name
                  : 'unknown',
            addedAt: eachSong.added_at,
            trackNumber: editordata.tracks.items.indexOf(eachSong) + 1,
            previewUrl: eachSong.track.preview_url
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
      this.newReleaseSongStatus = songsApiConstants.in_Progress
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

         const updatedEditorData = newReleasedata.tracks.items.map(
            eachSong => ({
               id: eachSong.id,
               duration: eachSong.duration_ms,
               popularity: newReleasedata.popularity,
               songName: eachSong.name
            })
         )
         this.newReleaseSongDetails = newReleaseSong
         this.newReleaseData = updatedEditorData
         this.newReleaseSongStatus = songsApiConstants.success
      } else {
         this.newReleaseSongStatus = songsApiConstants.failure
      }
   }

   @action changeSong(songUrl, songName, artist, playerurl) {
      this.songUrl = songUrl
      this.songName = songName
      this.artistName = artist
      this.playerImageURl = playerurl
   }
}

export default SpecificPlayListStore
