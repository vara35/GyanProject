import { inject, observer } from 'mobx-react'
import { Component } from 'react'
import 'twin.macro'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import YourMusicStore from '../../stores/YourMusicStore'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import YourMusicRouteSong from '../../componentsCopy/YourMusicRouteSong'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'

import { GenreHeading } from '../GenresAndMoods/styledComponents'
import { HeaderCss } from '../SpotifyHome/styledComponents'
import {
   YourMusicContainer,
   YourMusicUlContainer,
   VerticalContainerForYourMusic,
   GenreHeadingCss
} from './styledComponents'

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

   updateSong = (
      yourMusicImageUrl,
      yourMusicSongName,
      yourMusicArtist,
      previewUrl
   ) => {
      const { specificPlayListStore } = this.props
      specificPlayListStore.changeSong(
         yourMusicImageUrl,
         yourMusicSongName,
         yourMusicArtist,
         previewUrl
      )
   }

   showYourMusicFailureView = () => <SpotifyApiFailureView />

   showYourMusicSuccessView = () => {
      const { yourMusicStore, specificPlayListStore } = this.props

      return (
         <>
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
                     <YourMusicRouteSong
                        key={eachSong.id}
                        albumDetails={eachSong}
                        updateSong={this.updateSong}
                     />
                  )
               )}
            </YourMusicUlContainer>
            <SpotifyPlayer
               playerThumbnailUrl={specificPlayListStore.playerThumbnailUrl}
               playerArtist={specificPlayListStore.artistName}
               playerSongName={specificPlayListStore.songName}
               playerSongUrl={specificPlayListStore.playerSongUrl}
            />
         </>
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
         case yourMusicApiConstants.failure:
            return this.showYourMusicFailureView()
         default:
            null
      }
   }

   render() {
      return (
         <YourMusicContainer>
            <SpotifyHeader
               HeaderCss={HeaderCss}
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <VerticalContainerForYourMusic>
               <GenreHeading css={GenreHeadingCss}>{yourMusic}</GenreHeading>
               {this.showYourMusic()}
            </VerticalContainerForYourMusic>
         </YourMusicContainer>
      )
   }
}

export default YourMusic
