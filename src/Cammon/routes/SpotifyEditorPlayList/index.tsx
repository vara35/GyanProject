import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import 'twin.macro'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifySongDetails from '../../componentsCopy/SpotifySongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpecificEditorSong from '../../componentsCopy/SpecificEditorSong'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'
import SpotifyEditorTable from '../../componentsCopy/SpotifyEditorTable'

import { HeaderCss } from '../SpotifyHome/styledComponents'
import { TableContainer } from '../SpotifyNewReleaseRoute/styledComponents'
import {
   SpotifySpecificMainContainer,
   TableHeader,
   TableName,
   SongAndTableContainer,
   SpotifyHrLine,
   EditorsUlContainer,
   HashCss,
   TrackHeadingCss,
   AlbumCss,
   TimeHeadingCss,
   ArtistHeadingCss
} from './styledComponents'

const tableHeader = {
   track: 'Track',
   album: 'Album',
   time: 'Time',
   artist: 'Artist',
   added: 'Added'
}

interface SpotifySpecificPlayListProps {
   specificPlayListStore: SpecificPlayListStore
   history: any
}

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

@inject('specificPlayListStore')
@observer
class SpotifyEditorPlayList extends Component<SpotifySpecificPlayListProps> {
   state = { editorActiveTabId: '' }
   componentDidMount() {
      const { specificPlayListStore } = this.props
      specificPlayListStore.getSpecificEditorData(this.props)
   }

   updateSongDetails = (
      playerThumbnailUrl = '',
      songName,
      artist,
      playerSongUrl,
      id
   ) => {
      const { specificPlayListStore } = this.props
      specificPlayListStore.changeSong(
         playerThumbnailUrl,
         songName,
         artist,
         playerSongUrl
      )
      this.setState({ editorActiveTabId: id })
   }

   showSongsFailureView = () => <SpotifyApiFailureView />

   showSongsSuccessView = () => {
      const { specificPlayListStore } = this.props
      const { editorActiveTabId } = this.state
      const { specificEditorsData } = specificPlayListStore

      const { history } = this.props
      const { location } = history
      console.log(location.pathname)

      return (
         <SongAndTableContainer>
            <SpotifySongDetails
               songDetailsData={
                  this.props.specificPlayListStore.songDetailsData
               }
               songDetailsText='Editors picks'
            />
            <TableContainer>
               <SpotifyEditorTable
                  editorsTableData={specificEditorsData}
                  updateSongDetails={this.updateSongDetails}
                  editorActiveTabId={editorActiveTabId}
               />
            </TableContainer>
            <SpotifyPlayer
               playerThumbnailUrl={specificPlayListStore.playerThumbnailUrl}
               playerArtist={specificPlayListStore.artistName}
               playerSongName={specificPlayListStore.songName}
               playerSongUrl={specificPlayListStore.playerSongUrl}
            />
         </SongAndTableContainer>
      )
   }

   showSongsInprogressView = () => <SpotifyLoader />

   showEditorSongs = () => {
      const { specificPlayListStore } = this.props

      switch (specificPlayListStore.songStatus) {
         case songsApiConstants.in_Progress:
            return this.showSongsInprogressView()
         case songsApiConstants.success:
            return this.showSongsSuccessView()
         case songsApiConstants.failure:
            return this.showSongsFailureView()
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
            {this.showEditorSongs()}
         </SpotifySpecificMainContainer>
      )
   }
}

export default SpotifyEditorPlayList
