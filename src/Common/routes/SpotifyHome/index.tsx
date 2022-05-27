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
const categoryText = 'Genres & Moods'
const newReleaseText = 'New releases'

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
      spotifyHomeStore.getCategory()
   }

   showCategoryCardSuccessView = () => {
      const { spotifyHomeStore } = this.props
      const { categoryData } = spotifyHomeStore
      return (
         <>
            {categoryData.map(
               (eachCard: { categoryCardImage: string; id: string }) => (
                  <SpotifyCard
                     cardHeading='Hello'
                     cardImgUrl={eachCard.categoryCardImage}
                     key={eachCard.id}
                     id={eachCard.id}
                  />
               )
            )}
         </>
      )
   }
   showCategoryCardInprogressView = () => 'ok'

   showCategoryCards = () => {
      const { spotifyHomeStore } = this.props

      switch (spotifyHomeStore.categoryStatus) {
         case cardApiConstants.in_Progress:
            return this.showCategoryCardInprogressView()
         case cardApiConstants.success:
            return this.showCategoryCardSuccessView()
         default:
            null
      }
   }

   showEditorCardSuccessView = () => {
      const { spotifyHomeStore } = this.props
      const { editorPicksData } = spotifyHomeStore
      return (
         <>
            {editorPicksData.map(
               (eachCard: { name: string; cardImage: string; id: number }) => (
                  <SpotifyCard
                     cardHeading={eachCard.name}
                     cardImgUrl={eachCard.cardImage}
                     key={eachCard.id}
                     id={eachCard.id}
                  />
               )
            )}
         </>
      )
   }

   showEditorCardInprogressView = () => 'ok'

   showEditorCards = () => {
      const { spotifyHomeStore } = this.props

      switch (spotifyHomeStore.editorStatus) {
         case cardApiConstants.in_Progress:
            return this.showEditorCardInprogressView()
         case cardApiConstants.success:
            return this.showEditorCardSuccessView()
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
            <CardsMainContainer>
               <EditorHeading marginTop='96px' marginBottom='32px'>
                  {editorText}
               </EditorHeading>
               <CardsUlContainer>{this.showEditorCards()}</CardsUlContainer>
               <EditorHeading marginTop='16px' marginBottom='32px'>
                  {categoryText}
               </EditorHeading>
               <CardsUlContainer>{this.showCategoryCards()}</CardsUlContainer>
               <EditorHeading marginTop='16px' marginBottom='32px'>
                  {newReleaseText}
               </EditorHeading>
               <CardsUlContainer>{this.showCategoryCards()}</CardsUlContainer>
            </CardsMainContainer>
         </SpotifyHomeMainContainer>
      )
   }
}

export default SpotifyHome
