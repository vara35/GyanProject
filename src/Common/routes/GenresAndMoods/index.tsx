import { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

import SpotifyHeader from '../../components/SpotifyHeader'

import { SpotifySpecificMainContainer } from '../SpotifyEditorPlayList/styledComponents'
import { BackTextButton } from '../../components/SongDetails/styledComponents'

import {
   BackTextArrowContainer,
   GenreHeading,
   VerticalContainer
} from './styledComponents'

const back = 'Back'
const podcast = 'Podcast'

class GenreAndMoods extends Component {
   render() {
      return (
         <SpotifySpecificMainContainer>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            <VerticalContainer>
               <Link to='/spotifyhome'>
                  <BackTextArrowContainer>
                     <BiLeftArrowAlt className='left-arrow' />
                     <BackTextButton type='button'>{back}</BackTextButton>
                  </BackTextArrowContainer>
               </Link>
               <GenreHeading marginTop='48px'>{podcast}</GenreHeading>
            </VerticalContainer>
         </SpotifySpecificMainContainer>
      )
   }
}

export default GenreAndMoods
