import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

const profileApiConstants = {
   initial: 'INITIAL',
   in_progress: 'INPROGRESS',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

class ProfileStore {
   @observable userData: {
      name: string
      followers: { total: number | string }
   } = {
      name: '',
      followers: { total: '' }
   }

   @observable profileApiStatus = profileApiConstants.initial

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

      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
         const updatedUserDetails: any = {
            name: data.display_name,
            followers: data.followers
         }
         this.userData = updatedUserDetails
         this.profileApiStatus = profileApiConstants.success
      } else {
         this.profileApiStatus = profileApiConstants.failure
      }
   }
}

export default ProfileStore
