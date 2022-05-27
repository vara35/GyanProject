import { observable, action } from 'mobx'
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom'

interface SpecificPlayStoreProps {
   name?: string
}

class SpecificPlayListStore {
   @observable specificEditorsData = []

   @action.bound getSpecificEditorData = async props => {
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
      const updatedEditorData = 'ok'

      console.log(editordata)
   }
}

export default SpecificPlayListStore
