import { action, observable } from 'mobx'
import moment from 'moment'
import Cookies from 'js-cookie'

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

   @observable categoryData: { id: string; categoryCardImage: string }[] = []
   @observable newReleaseData: {
      id: string
      newReleaseImage: string
      name: string
   }[] = []

   @observable editorStatus = cardApiConstants.initial
   @observable categoryStatus = cardApiConstants.initial
   @observable newReleaseStatus = cardApiConstants.initial

   @action getEditorPicks = async () => {
      this.editorStatus = cardApiConstants.in_Progress
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
         this.editorStatus = cardApiConstants.success
         this.editorPicksData = updatedEditorData
      } else {
         this.editorStatus = cardApiConstants.failure
      }
   }

   @action getCategory = async () => {
      this.categoryStatus = cardApiConstants.in_Progress
      const token = Cookies.get('pa_token')
      const url = 'https://api.spotify.com/v1/browse/categories'

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const categoryResponse = await fetch(url, options)
      const categoryJsonData = await categoryResponse.json()
      if (categoryResponse.ok) {
         const updatedCategoryData = categoryJsonData.categories.items.map(
            eachCategoryList => ({
               categoryCardImage: eachCategoryList.icons[0].url,
               id: eachCategoryList.id
            })
         )
         this.categoryData = updatedCategoryData
         this.categoryStatus = cardApiConstants.success
      } else {
         this.categoryStatus = cardApiConstants.failure
      }
   }

   @action getNewRelease = async () => {
      this.newReleaseStatus = cardApiConstants.in_Progress
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/browse/new-releases?country=IN`

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const newReleaseResponse = await fetch(url, options)
      const newReleaseJsonData = await newReleaseResponse.json()
      if (newReleaseResponse.ok) {
         const updatedNewReleaseData = newReleaseJsonData.albums.items.map(
            eachNewReleaseList => ({
               newReleaseImage: eachNewReleaseList.images[0].url,
               id: eachNewReleaseList.id,
               name: eachNewReleaseList.name
            })
         )
         this.newReleaseData = updatedNewReleaseData
         this.newReleaseStatus = cardApiConstants.success
      } else {
         this.newReleaseStatus = cardApiConstants.failure
      }
   }
}

export default SpotifyHomeStore
