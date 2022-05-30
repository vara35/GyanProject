import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

interface SpecificPlayStoreProps {
   name?: string
}

class SpecificPlayListStore {
   @observable specificEditorsData = []
   @observable songDetailsData: { name: string; songDetailsUrl: string } = {
      name: '',
      songDetailsUrl: ''
   }
   @observable songStatus = songsApiConstants.initial
   @observable songUrl = ''

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
            trackNumber: eachSong.track.track_number,
            previewUrl: eachSong.track.preview_url
         }))

         this.songDetailsData = songDetails
         this.specificEditorsData = updatedEditorData
         this.songStatus = songsApiConstants.success
      } else {
         this.songStatus = songsApiConstants.failure
      }
   }

   @action changeSong(songUrl) {
      this.songUrl = songUrl
   }
}

export default SpecificPlayListStore
