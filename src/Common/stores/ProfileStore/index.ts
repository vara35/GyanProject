import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

class ProfileStore {
   @observable userDetails: { name: string; followers: number } = {
      name: '',
      followers: 0
   }

   @action
   getUserData = async () => {
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
      const updatedUserDetails: any = {
         name: data.display_name,
         followers: data.followers.total
      }
      this.userDetails = updatedUserDetails
   }
}

export default ProfileStore
