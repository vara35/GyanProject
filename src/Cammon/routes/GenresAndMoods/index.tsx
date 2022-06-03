import { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { inject, observer } from 'mobx-react'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import GenresCard from '../../componentsCopy/GenresCard'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'

import { SpotifySpecificMainContainer } from '../SpotifyEditorPlayList/styledComponents'
import { BackTextButton } from '../../componentsCopy/SpotifySongDetails/styledComponents'
import { CardsUlContainer } from '../SpotifyHome/styledComponents'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'

import {
   BackTextArrowContainer,
   GenreHeading,
   VerticalContainer
} from './styledComponents'

const back = 'Back'
const podcast = 'Podcast'

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

interface GenreAndMoodsProps {
   specificPlayListStore: SpecificPlayListStore
}

@inject('specificPlayListStore')
@observer
class GenreAndMoods extends Component<GenreAndMoodsProps> {
   componentDidMount() {
      const { specificPlayListStore } = this.props
      specificPlayListStore.getCategoryData(this.props)
   }

   showCategorySuccessView = () => {
      const { specificPlayListStore } = this.props
      return (
         <CardsUlContainer>
            {specificPlayListStore.categoryData.map(
               (eachCategory: { id: string }) => (
                  <GenresCard genreObj={eachCategory} key={eachCategory.id} />
               )
            )}
         </CardsUlContainer>
      )
   }

   showCategoryInprogressView = () => <SpotifyLoader />

   showCategoryPlayLists = () => {
      const { specificPlayListStore } = this.props

      switch (specificPlayListStore.categorySongStatus) {
         case songsApiConstants.in_Progress:
            return this.showCategoryInprogressView()
         case songsApiConstants.success:
            return this.showCategorySuccessView()
         default:
            null
      }
   }

   render() {
      return (
         <SpotifySpecificMainContainer>
            <SpotifyHeader
               marginTop='304px'
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <VerticalContainer>
               <Link to='/spotifyhome'>
                  <BackTextArrowContainer>
                     <BiLeftArrowAlt className='left-arrow' />
                     <BackTextButton type='button'>{back}</BackTextButton>
                  </BackTextArrowContainer>
               </Link>
               <GenreHeading marginTop='48px'>{podcast}</GenreHeading>
               {this.showCategoryPlayLists()}
            </VerticalContainer>
         </SpotifySpecificMainContainer>
      )
   }
}

export default GenreAndMoods
