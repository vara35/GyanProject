import { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { inject, observer } from 'mobx-react'
import 'twin.macro'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifyGenresCard from '../../componentsCopy/SpotifyGenresCard'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'

import { SpotifySpecificMainContainer } from '../SpotifyEditorPlayList/styledComponents'
import { BackTextButton } from '../../componentsCopy/SpotifySongDetails/styledComponents'
import { CardsUlContainer, HeaderCss } from '../SpotifyHome/styledComponents'

import {
   BackTextArrowContainer,
   GenreHeading,
   VerticalContainer,
   GenreCardCss
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
               (eachCategory: {
                  id: string
                  genreImage: string
                  name: string
                  total: string
               }) => (
                  <SpotifyGenresCard
                     genreObj={eachCategory}
                     key={eachCategory.id}
                  />
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
               HeaderCss={HeaderCss}
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <VerticalContainer>
               <Link to='/'>
                  <BackTextArrowContainer>
                     <BiLeftArrowAlt className='left-arrow' />
                     <BackTextButton type='button'>{back}</BackTextButton>
                  </BackTextArrowContainer>
               </Link>
               <GenreHeading css={GenreCardCss}>{podcast}</GenreHeading>
               {this.showCategoryPlayLists()}
            </VerticalContainer>
         </SpotifySpecificMainContainer>
      )
   }
}

export default GenreAndMoods
