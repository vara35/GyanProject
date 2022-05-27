import { action, observable } from 'mobx'
import moment from 'moment'
import Cookies from 'js-cookie'
import { CardImage } from './../../components/SpotifyCard/styledComponents'

const cardApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class SpotifyHomeStore {
   @observable editorPicksData: {
      name: string
      cardImage: string
      id: number
   }[] = [{ name: '', cardImage: '', id: 0 }]
   @observable cardStatus = cardApiConstants.initial

   @action getEditorPicks = async () => {
      this.cardStatus = cardApiConstants.in_Progress
      const timestamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=${timestamp}`

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
         const updatedEditorData = data.playlists.items.map(eachEditorList => ({
            cardImage: eachEditorList.images[0].url,
            name: eachEditorList.name,
            id: eachEditorList.id
         }))
         this.cardStatus = cardApiConstants.success
         this.editorPicksData = updatedEditorData
      }
   }
}

export default SpotifyHomeStore
