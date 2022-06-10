import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import 'twin.macro'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifySongDetails from '../../componentsCopy/SpotifySongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'
import SpotifyEditorTable from '../../componentsCopy/SpotifyEditorTable'
import SpotifyNewReleaseTable from '../../componentsCopy/SpotifyNewReleaseTable'

import { HeaderCss } from '../SpotifyHome/styledComponents'
import { TableContainer } from '../SpotifyNewReleaseRoute/styledComponents'
import {
   SpotifySpecificMainContainer,
   SongAndTableContainer
} from './styledComponents'

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
class SpotifyCommonRoute extends Component<SpotifySpecificPlayListProps> {
   state = { activeTabId: '' }
   componentDidMount() {
      const { specificPlayListStore } = this.props
      const { history } = this.props
      const { location } = history
      const { pathname } = location

      const renderRoute = pathname.slice(0, 7) === '/editor'
      {
         renderRoute
            ? specificPlayListStore.getSpecificEditorData(this.props)
            : specificPlayListStore.getNewReleaseData(this.props)
      }
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
      this.setState({ activeTabId: id })
   }

   showSongsFailureView = () => <SpotifyApiFailureView />

   showSongsSuccessView = () => {
      const { specificPlayListStore } = this.props
      const { activeTabId } = this.state
      const { specificEditorsData } = specificPlayListStore

      const { history } = this.props
      const { location } = history
      const { pathname } = location

      const renderRoute = pathname.slice(0, 7) === '/editor'

      return (
         <SongAndTableContainer>
            <SpotifySongDetails
               songDetailsData={
                  this.props.specificPlayListStore.songDetailsData
               }
               songDetailsText='Editors picks'
            />
            <TableContainer>
               {renderRoute ? (
                  <SpotifyEditorTable
                     editorsTableData={specificEditorsData}
                     updateSongDetails={this.updateSongDetails}
                     activeTabId={activeTabId}
                  />
               ) : (
                  <SpotifyNewReleaseTable
                     tableData={specificPlayListStore.newReleaseData}
                     updateSongDetails={this.updateSongDetails}
                     activeTabId={activeTabId}
                  />
               )}
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

export default SpotifyCommonRoute
