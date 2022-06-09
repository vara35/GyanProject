import { inject, observer } from 'mobx-react'
import { Component } from 'react'
import 'twin.macro'

import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'
import SpotifyGenresCard from '../../componentsCopy/SpotifyGenresCard'
import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import PlayListStore from '../../stores/PlayListStore'

import {
   GenreHeading,
   VerticalContainer
} from '../GenresAndMoods/styledComponents'
import { CardsUlContainer, HeaderCss } from '../SpotifyHome/styledComponents'
import { GenreHeadingCss } from '../SpotifyYourMusic/styledComponents'
import { PlayListContainer } from './styledComponents'

const yourPlaylists = 'Your Playlists'

const playListApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

interface PlayListProps {
   playListStore: PlayListStore
}

@inject('playListStore')
@observer
class SpotifyPlayList extends Component<PlayListProps> {
   componentDidMount() {
      const { playListStore } = this.props
      playListStore.getPlayListData()
   }

   showPlayListFailureView = () => <SpotifyApiFailureView />

   showPlayListSuccessView = () => {
      const { playListStore } = this.props
      return (
         <CardsUlContainer>
            {playListStore.playListData.map(
               (eachCategory: {
                  id: string
                  genreImage: string
                  name: string
                  total: number | string
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
   showPlayListInprogressView = () => <SpotifyLoader />

   showPlayList = () => {
      const { playListStore } = this.props

      switch (playListStore.playListStatus) {
         case playListApiConstants.in_Progress:
            return this.showPlayListInprogressView()
         case playListApiConstants.success:
            return this.showPlayListSuccessView()
         case playListApiConstants.failure:
            return this.showPlayListFailureView()
         default:
            null
      }
   }

   render() {
      return (
         <PlayListContainer>
            <SpotifyHeader
               HeaderCss={HeaderCss}
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <VerticalContainer>
               <GenreHeading css={GenreHeadingCss}>
                  {yourPlaylists}
               </GenreHeading>
               {this.showPlayList()}
            </VerticalContainer>
         </PlayListContainer>
      )
   }
}

export default SpotifyPlayList
