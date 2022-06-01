import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

class ProfileStore {
   @observable userData: {
      name: string
      followers: { total: number | string }
   } = {
      name: '',
      followers: { total: '' }
   }

   @action getUserData = async () => {
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
      }
   }
}

export default ProfileStore
