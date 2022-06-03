import { inject, observer } from 'mobx-react'
import { Component } from 'react'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import YourMusicStore from '../../stores/YourMusicStore'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import YourMusicSongs from '../../componentsCopy/YourMusicSongs'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'

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
   specificPlayListStore: SpecificPlayListStore
}

@inject('yourMusicStore', 'specificPlayListStore')
@observer
class YourMusic extends Component<YourMusicProps> {
   componentDidMount() {
      const { yourMusicStore } = this.props
      yourMusicStore.getYourMusicdata()
   }

   updateSong = (previewUrl, yourMusicSongName, yourMusicArtist, playerUrl) => {
      const { specificPlayListStore } = this.props
      specificPlayListStore.changeSong(
         previewUrl,
         yourMusicSongName,
         yourMusicArtist,
         playerUrl
      )
   }
   showYourMusicSuccessView = () => {
      const { yourMusicStore } = this.props

      return (
         <YourMusicUlContainer>
            {yourMusicStore.yourMusicSongsData.map(
               (eachSong: {
                  id: string
                  yourMusicImageUrl: string
                  yourMusicSongName: string
                  yourMusicArtist: string
                  movieName: string
                  duration: string
                  previewUrl: string
               }) => (
                  <YourMusicSongs
                     key={eachSong.id}
                     albumDetails={eachSong}
                     updateSong={this.updateSong}
                  />
               )
            )}
         </YourMusicUlContainer>
      )
   }
   showYourMusicInprogressView = () => <SpotifyLoader />

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
      const { specificPlayListStore } = this.props
      return (
         <YourMusicContainer>
            <SpotifyHeader
               marginTop='304px'
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <VerticalContainer>
               <GenreHeading marginTop='48px'>{yourMusic}</GenreHeading>
               {this.showYourMusic()}
               <SpotifyPlayer
                  songUrl={specificPlayListStore.songUrl}
                  playerArtist={specificPlayListStore.artistName}
                  playerSongName={specificPlayListStore.songName}
                  playerUrl={specificPlayListStore.playerImageURl}
               />
            </VerticalContainer>
         </YourMusicContainer>
      )
   }
}

export default YourMusic
