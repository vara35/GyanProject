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

import { HeaderCss } from '../SpotifyHome/styledComponents'
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
   eachSong: {
      id: string
   }

   isHash?: boolean
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

   changeSongStatus = (
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
      const { specificPlayListStore, isHash = false } = this.props
      const { editorActiveTabId } = this.state
      const hash = isHash ? '#' : null

      return (
         <SongAndTableContainer>
            <SpotifySongDetails
               songDetailsData={
                  this.props.specificPlayListStore.songDetailsData
               }
               songDetailsText='Editors picks'
            />
            <TableHeader>
               <TableName css={HashCss}>{hash}</TableName>
               <TableName css={TrackHeadingCss}>{tableHeader.track} </TableName>
               <TableName css={AlbumCss}>{tableHeader.album}</TableName>
               <TableName css={TimeHeadingCss}>{tableHeader.time}</TableName>
               <TableName css={ArtistHeadingCss}>
                  {tableHeader.artist}
               </TableName>
               <TableName css={TimeHeadingCss}>{tableHeader.added}</TableName>
            </TableHeader>
            <SpotifyHrLine width='1278px' margin={true} />
            <EditorsUlContainer>
               {specificPlayListStore.specificEditorsData.map(
                  (eachSong: {
                     id: string
                     duration: string
                     albumName: string
                     songName: string
                     addedAt: string
                     trackNumber: string
                     previewUrl: string
                     songThumbnialUrl: string | undefined
                     artist: string
                  }) => (
                     <SpecificEditorSong
                        songDetailsProps={eachSong}
                        key={eachSong.id}
                        changeSongStatus={this.changeSongStatus}
                        isSongs={true}
                        tabId={editorActiveTabId}
                     />
                  )
               )}
            </EditorsUlContainer>
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

   showEditorsongs = () => {
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
            {this.showEditorsongs()}
         </SpotifySpecificMainContainer>
      )
   }
}

export default SpotifyEditorPlayList
