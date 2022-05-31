import { inject, observer } from 'mobx-react'
import { Component } from 'react'

import SpotifyHeader from '../../components/SpotifyHeader'
import YourMusicStore from '../../stores/YourMusicStore'
import YourMusicSongs from '../../components/YourMusicSongs'
import Player from '../../components/Player'

import {
   GenreHeading,
   VerticalContainer
} from '../GenresAndMoods/styledComponents'
import { YourMusicContainer, YourMusicUlContainer } from './styledComponents'

const yourMusic = 'Your Music'

const yourMusicApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

interface YourMusicProps {
   yourMusicStore: YourMusicStore
}

@inject('yourMusicStore')
@observer
class YourMusic extends Component<YourMusicProps> {
   componentDidMount() {
      const { yourMusicStore } = this.props
      yourMusicStore.getYourMusicdata()
   }
   showYourMusicSuccessView = () => {
      const { yourMusicStore } = this.props

      return (
         <YourMusicUlContainer>
            {yourMusicStore.yourMusicSongsData.map(
               (eachSong: { id: string }) => (
                  <YourMusicSongs key={eachSong.id} />
               )
            )}
         </YourMusicUlContainer>
      )
   }
   showYourMusicInprogressView = () => 'Ok'

   showYourMusic = () => {
      const { yourMusicStore } = this.props

      switch (yourMusicStore.yourMusicStatus) {
         case yourMusicApiConstants.in_Progress:
            return this.showYourMusicInprogressView()
         case yourMusicApiConstants.success:
            return this.showYourMusicSuccessView()
         default:
            null
      }
   }

   render() {
      return (
         <YourMusicContainer>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            <VerticalContainer>
               <GenreHeading marginTop='96px'>{yourMusic}</GenreHeading>
               {this.showYourMusic()}
               <Player playerUrl='' playerArtist='' playerSongName='' />
            </VerticalContainer>
         </YourMusicContainer>
      )
   }
}

export default YourMusic
