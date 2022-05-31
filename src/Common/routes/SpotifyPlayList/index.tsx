import { inject, observer } from 'mobx-react'
import { Component } from 'react'

import GenresCard from '../../components/GenresCard'
import SpotifyHeader from '../../components/SpotifyHeader'
import PlayListStore from '../../stores/PlayListStore'

import {
   GenreHeading,
   VerticalContainer
} from '../GenresAndMoods/styledComponents'
import { CardsUlContainer } from '../SpotifyHome/styledComponents'
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

   showPlayListSuccessView = () => {
      const { playListStore } = this.props
      return (
         <CardsUlContainer>
            {playListStore.playListData.map((eachCategory: { id: string }) => (
               <GenresCard genreObj={eachCategory} key={eachCategory.id} />
            ))}
         </CardsUlContainer>
      )
   }
   showPlayListInprogressView = () => 'Ok'

   showPlayList = () => {
      const { playListStore } = this.props

      switch (playListStore.playListStatus) {
         case playListApiConstants.in_Progress:
            return this.showPlayListInprogressView()
         case playListApiConstants.success:
            return this.showPlayListSuccessView()
         default:
            null
      }
   }

   render() {
      return (
         <PlayListContainer>
            <SpotifyHeader marginTop='361px' isShowHeaderLogo={false} />
            <VerticalContainer>
               <GenreHeading marginTop='96px'>{yourPlaylists}</GenreHeading>
               {this.showPlayList()}
            </VerticalContainer>
         </PlayListContainer>
      )
   }
}

export default SpotifyPlayList
