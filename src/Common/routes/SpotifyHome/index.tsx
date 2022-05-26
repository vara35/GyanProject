import { inject, observer } from 'mobx-react'
import { Component } from 'react'

import SpotifyCard from '../../components/SpotifyCard'
import SpotifyHeader from '../../components/SpotifyHeader'
import SpotifyHomeStore from '../../stores/SpotifyHomeStore'

import {
   SpotifyHomeMainContainer,
   CardsMainContainer,
   EditorHeading,
   CardsUlContainer
} from './styledComponents'

const editorText = "Editor's picks"

interface SpotifyHomeConstants {
   spotifyHomeStore: SpotifyHomeStore
}

@observer
@inject('spotifyHomeStore')
class SpotifyHome extends Component<SpotifyHomeConstants> {
   componentDidMount() {
      const { spotifyHomeStore } = this.props
      spotifyHomeStore.getEditorPicks()
   }
   render() {
      return (
         <SpotifyHomeMainContainer>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            <CardsMainContainer>
               <EditorHeading>{editorText}</EditorHeading>
               <CardsUlContainer>
                  <SpotifyCard />
               </CardsUlContainer>
            </CardsMainContainer>
         </SpotifyHomeMainContainer>
      )
   }
}

export default SpotifyHome
