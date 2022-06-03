import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifySongDetails from '../../componentsCopy/SpotifySongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpecificEditorSong from '../../componentsCopy/SpecificEditorSong'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'

import {
   EditorsUlContainer,
   SongAndTableContainer,
   SpotifyHrLine,
   SpotifySpecificMainContainer,
   TableHeader,
   TableName
} from '../SpotifyEditorPlayList/styledComponents'

import {} from './styledComponents'

const tableHeader = {
   hash: '#',
   track: 'Track',
   album: 'Album',
   time: 'Time',
   artist: 'Artist',
   added: 'Added',
   popularity: 'Popularity'
}

interface SpotifyNewReleaseProps {
   specificPlayListStore: SpecificPlayListStore

   changeSongStatus: () => void
   isHash?: boolean
   songDetailsText: string
   songDetailsProps: any
   eachSong: { newReleaseImage: string; id: string; name: string }
}

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

@inject('specificPlayListStore')
@observer
class SpotifyNewRelease extends Component<SpotifyNewReleaseProps> {
   componentDidMount() {
      const { specificPlayListStore } = this.props
      specificPlayListStore.getNewReleaseData(this.props)
   }

   changeSongStatus = (
      previewUrl = '',
      songName = '',
      artist = '',
      playerUrl
   ) => {
      const { specificPlayListStore } = this.props
      specificPlayListStore.changeSong(previewUrl, songName, artist, playerUrl)
   }

   showNewReleaseSuccessView = () => {
      const { specificPlayListStore } = this.props

      return (
         <>
            <SpotifyHeader
               marginTop='304px'
               isShowHeaderLogo={true}
               passProps={this.props}
            />
            <SongAndTableContainer>
               <SpotifySongDetails
                  songDetailsData={
                     this.props.specificPlayListStore.newReleaseSongDetails
                  }
                  songDetailsText='New Releases'
               />
               <TableHeader>
                  <TableName width='48px'>{tableHeader.hash} </TableName>
                  <TableName width='500px'>{tableHeader.track} </TableName>
                  <TableName width='430px'>{tableHeader.time}</TableName>
                  <TableName width='300px'>{tableHeader.popularity}</TableName>
               </TableHeader>
               <SpotifyHrLine width='1278px' margin={true} />
               <EditorsUlContainer>
                  {specificPlayListStore.newReleaseData.map((eachSong: any) => (
                     <SpecificEditorSong
                        songDetailsProps={eachSong}
                        key={eachSong.id}
                        changeSongStatus={this.changeSongStatus}
                        isSongs={false}
                     />
                  ))}
               </EditorsUlContainer>
               <SpotifyPlayer
                  songUrl={specificPlayListStore.songUrl}
                  playerArtist={specificPlayListStore.artistName}
                  playerSongName={specificPlayListStore.songName}
                  playerUrl={specificPlayListStore.playerImageURl}
               />
            </SongAndTableContainer>
         </>
      )
   }

   showNewReleaseInprogressView = () => <SpotifyLoader />

   showNewReleaseSongs = () => {
      const { specificPlayListStore } = this.props

      switch (specificPlayListStore.newReleaseSongStatus) {
         case songsApiConstants.in_Progress:
            return this.showNewReleaseInprogressView()
         case songsApiConstants.success:
            return this.showNewReleaseSuccessView()
         default:
            null
      }
   }

   render() {
      return (
         <SpotifySpecificMainContainer>
            {this.showNewReleaseSongs()}
         </SpotifySpecificMainContainer>
      )
   }
}

export default SpotifyNewRelease
