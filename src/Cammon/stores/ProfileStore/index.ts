import { observable, action } from 'mobx'
import Cookies from 'js-cookie'
import SpotifyProfileModel from '../models/SpotifyProfileModel'

const profileApiConstants = {
   initial: 'INITIAL',
   in_progress: 'INPROGRESS',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class ProfileStore {
   @observable userData: {
      name: string
      followers: {
         total: number | string
      }
   }[] = []

   @observable profileApiStatus = profileApiConstants.initial

   spotifyProfileServiceData
   constructor(spotifyProfileService) {
      this.spotifyProfileServiceData = spotifyProfileService
   }

   @action getUserData = async () => {
      this.profileApiStatus = profileApiConstants.in_progress
      const token = Cookies.get('pa_token')
      const url = 'https://api.spotify.com/v1/me'
      const options = {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${token}`
         }
      }

      const response = await this.spotifyProfileServiceData.getUserDetails(
         url,
         options
      )
      const data = await response.json()
      if (response.ok) {
         const profileItem = new SpotifyProfileModel(data)
         this.userData.push(profileItem)
         this.profileApiStatus = profileApiConstants.success
      } else {
         this.profileApiStatus = profileApiConstants.failure
      }
   }
}

export default ProfileStore
