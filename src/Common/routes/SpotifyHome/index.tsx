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

const cardApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

interface SpotifyHomeConstants {
   spotifyHomeStore: SpotifyHomeStore
   cardHeading: any

   cardImgUrl: string
}

@inject('spotifyHomeStore')
@observer
class SpotifyHome extends Component<SpotifyHomeConstants> {
   componentDidMount() {
      const { spotifyHomeStore } = this.props
      spotifyHomeStore.getEditorPicks()
   }

   showCardSuccessView = () => {
      const { spotifyHomeStore } = this.props
      const { editorPicksData } = spotifyHomeStore
      return (
         <CardsMainContainer>
            <EditorHeading marginTop='96px' marginBottom='32px'>
               {editorText}
            </EditorHeading>
            <CardsUlContainer>
               {editorPicksData.map(
                  (eachCard: {
                     name: string
                     cardImage: string
                     id: number
                  }) => (
                     <SpotifyCard
                        cardHeading={eachCard.name}
                        cardImgUrl={eachCard.cardImage}
                        key={eachCard.id}
                        id={eachCard.id}
                     />
                  )
               )}
            </CardsUlContainer>
            <EditorHeading marginTop='16px' marginBottom='32px'>
               {editorText}
            </EditorHeading>
         </CardsMainContainer>
      )
   }

   showCardInprogressView = () => 'ok'

   showCards = () => {
      const { spotifyHomeStore } = this.props
      console.log(spotifyHomeStore.cardStatus)

      switch (spotifyHomeStore.cardStatus) {
         case cardApiConstants.in_Progress:
            return this.showCardInprogressView()
         case cardApiConstants.success:
            return this.showCardSuccessView()
         default:
            null
      }
   }

   render() {
      const { spotifyHomeStore } = this.props
      const { editorPicksData } = spotifyHomeStore
      return (
         <SpotifyHomeMainContainer>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            {this.showCards()}
         </SpotifyHomeMainContainer>
      )
   }
}

export default SpotifyHome
