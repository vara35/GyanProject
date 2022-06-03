import { action, observable } from 'mobx'
import moment from 'moment'
import Cookies from 'js-cookie'

import SpotifyHomeModel from '../models/SpotifyEditorModel'
import SpotifyCategoryModel from '../models/SpotifyCategoryModel'
import SpotifyNewReleaseModel from '../models/SpotifyNewReleaseModel'

const cardApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

export interface EditorDataProps {
   cardImage: string
   id: number | string
   name: string
}

class SpotifyHomeStore {
   @observable editorPicksData: any = []

   @observable categoryData: { id: string; categoryCardImage: string }[] = []
   @observable newReleaseData: any = []

   @observable editorStatus = cardApiConstants.initial
   @observable categoryStatus = cardApiConstants.initial
   @observable newReleaseStatus = cardApiConstants.initial

   editorServiceData

   constructor(getEditorData) {
      this.editorServiceData = getEditorData
   }

   @action getEditorPicks = async () => {
      this.editorStatus = cardApiConstants.in_Progress
      this.editorPicksData = []
      const timestamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=${timestamp}`

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const editorResponse = await this.editorServiceData.getHomeDataFromService(
         url,
         options
      )
      const editorJsonData = await editorResponse.json()

      if (editorResponse.ok) {
         const updatedEditorData = editorJsonData.playlists.items.map(
            eachEditorList => {
               const data = new SpotifyHomeModel(eachEditorList)
               this.editorPicksData.push(data)
            }
         )
         this.editorStatus = cardApiConstants.success
      } else {
         this.editorStatus = cardApiConstants.failure
      }
   }

   @action getCategory = async () => {
      this.categoryStatus = cardApiConstants.in_Progress
      this.categoryData = []
      const token = Cookies.get('pa_token')
      const url = 'https://api.spotify.com/v1/browse/categories'

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const categoryResponse = await this.editorServiceData.getHomeDataFromService(
         url,
         options
      )
      const categoryJsonData = await categoryResponse.json()

      if (categoryResponse.ok) {
         const updatedCategoryData = categoryJsonData.categories.items.map(
            eachCategoryList => {
               const categoryItem = new SpotifyCategoryModel(eachCategoryList)
               this.categoryData.push(categoryItem)
            }
         )
         this.categoryStatus = cardApiConstants.success
      } else {
         this.categoryStatus = cardApiConstants.failure
      }
   }

   @action getNewRelease = async () => {
      this.newReleaseStatus = cardApiConstants.in_Progress
      this.newReleaseData = []
      const token = Cookies.get('pa_token')
      const url = `https://api.spotify.com/v1/browse/new-releases?country=IN`

      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const newReleaseResponse = await this.editorServiceData.getHomeDataFromService(
         url,
         options
      )
      const newReleaseJsonData = await newReleaseResponse.json()

      if (newReleaseResponse.ok) {
         const updatedNewReleaseData = newReleaseJsonData.albums.items.map(
            eachNewReleaseList => {
               const newReleaseItem = new SpotifyNewReleaseModel(
                  eachNewReleaseList
               )
               this.newReleaseData.push(newReleaseItem)
            }
         )
         this.newReleaseStatus = cardApiConstants.success
      } else {
         this.newReleaseStatus = cardApiConstants.failure
      }
   }
}

export default SpotifyHomeStore
