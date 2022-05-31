import { inject, observer } from 'mobx-react'
import { Component } from 'react'

import SpotifyCategoryCard from '../../components/SpotifyCategoryCard'
import SpotifyEditorCard from '../../components/SpotifyEditorCard'
import SpotifyHeader from '../../components/SpotifyHeader'
import SpotifyLoader from '../../components/SpotifyLoader'
import SpotifyNewReleaseCard from '../../components/SpotifyNewReleaseCard'
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
      spotifyHomeStore.getNewRelease()
   }

   showNewRelaseSuccessView = () => {
      const { spotifyHomeStore } = this.props
      const { newReleaseData } = spotifyHomeStore
      return (
         <>
            {newReleaseData.map(
               (eachCard: {
                  newReleaseImage: string
                  id: string
                  name: string
               }) => (
                  <SpotifyNewReleaseCard
                     cardHeading={eachCard.name}
                     cardImgUrl={eachCard.newReleaseImage}
                     key={eachCard.id}
                     id={eachCard.id}
                  />
               )
            )}
         </>
      )
   }
   showNewRelaseInprogressView = () => <SpotifyLoader />

   showNewReleaseCards = () => {
      const { spotifyHomeStore } = this.props

      switch (spotifyHomeStore.categoryStatus) {
         case cardApiConstants.in_Progress:
            return this.showNewRelaseInprogressView()
         case cardApiConstants.success:
            return this.showNewRelaseSuccessView()
         default:
            null
      }
   }

   showCategoryCardSuccessView = () => {
      const { spotifyHomeStore } = this.props
      const { categoryData } = spotifyHomeStore
      return (
         <>
            {categoryData.map(
               (eachCard: { categoryCardImage: string; id: string }) => (
                  <SpotifyCategoryCard
                     cardImgUrl={eachCard.categoryCardImage}
                     key={eachCard.id}
                     id={eachCard.id}
                  />
               )
            )}
         </>
      )
   }
   showCategoryCardInprogressView = () => <SpotifyLoader />

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
                  <SpotifyEditorCard
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

   showEditorCardInprogressView = () => <SpotifyLoader />

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
               <CardsUlContainer>{this.showNewReleaseCards()}</CardsUlContainer>
            </CardsMainContainer>
         </SpotifyHomeMainContainer>
      )
   }
}

export default SpotifyHome
