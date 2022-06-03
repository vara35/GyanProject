import { create, ApisauceInstance } from 'apisauce'

import { apiMethods } from '../../constants/APIConstants'
import Config from '../../constants/EnvironmentConstants'
import { SampleApiResponse, SampleApiRequest } from '../../stores/types'

import endpoints from '../endpoints'

const AUTH_URL = `${Config.NKB_BASE_URL}nkb_auth/`

import SampleService from '.'

class SpotifyHomeServiceApi {
   getEditorPicks1 = async (url, options) => {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
   }
}

export default SpotifyHomeServiceApi
