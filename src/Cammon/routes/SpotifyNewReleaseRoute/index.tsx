import { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'

import SpotifyHeader from '../../componentsCopy/SpotifyHeader'
import SpotifySongDetails from '../../componentsCopy/SpotifySongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpotifyPlayer from '../../componentsCopy/SpotifyPlayer'
import SpotifyLoader from '../../componentsCopy/SpotifyLoader'
import SpotifyApiFailureView from '../../componentsCopy/SpotifyApiFailureView'
import SpotifyNewReleaseTable from '../../componentsCopy/SpotifyNewReleaseTable'

import {
   SongAndTableContainer,
   SpotifySpecificMainContainer
} from '../SpotifyEditorPlayList/styledComponents'
import { HeaderCss } from '../SpotifyHome/styledComponents'
import { TableContainer } from './styledComponents'

interface SpotifyNewReleaseProps {
   specificPlayListStore: SpecificPlayListStore
   newReleaseSongDetails: any
   newReleaseData: any
   playerThumbnailUrl: any
}

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

// const SpotifyNewReleaseRoute = inject('specificPlayListStore')(
//    observer((props: SpotifyNewReleaseProps) => {
//       const [newreleaseTableTabId, setNewReleaseTableId] = useState('')
//       useEffect(() => {
//          const { specificPlayListStore } = props
//          specificPlayListStore.getNewReleaseData(props)
//       }, [])

//       const changeSongStatus = (
//          previewUrl = '',
//          songName,
//          artist,
//          playerUrl,
//          id
//       ) => {
//          const { specificPlayListStore } = props
//          specificPlayListStore.changeSong(
//             previewUrl,
//             songName,
//             artist,
//             playerUrl
//          )
//          setNewReleaseTableId(id)
//       }

//       const showNewReleaseFailureView = () => <SpotifyApiFailureView />

//       const showNewReleaseSuccessView = () => {
//          const { specificPlayListStore } = props

//          return (
//             <SongAndTableContainer>
//                <SpotifySongDetails
//                   songDetailsData={
//                      props.specificPlayListStore.newReleaseSongDetails
//                   }
//                   songDetailsText='New Releases'
//                />
//                <TableContainer>
//                   <SpotifyNewReleaseTable
//                      tableData={specificPlayListStore.newReleaseData}
//                      changeSongStatus={changeSongStatus}
//                      newreleaseTableTabId={newreleaseTableTabId}
//                   />
//                </TableContainer>
//                <SpotifyPlayer
//                   playerThumbnailUrl={specificPlayListStore.playerThumbnailUrl}
//                   playerArtist={specificPlayListStore.artistName}
//                   playerSongName={specificPlayListStore.songName}
//                   playerSongUrl={specificPlayListStore.playerSongUrl}
//                />
//             </SongAndTableContainer>
//          )
//       }

//       const showNewReleaseInprogressView = () => <SpotifyLoader />

//       const showNewReleaseSongs = () => {
//          const { specificPlayListStore } = props

//          switch (specificPlayListStore.newReleaseSongStatus) {
//             case songsApiConstants.in_Progress:
//                return showNewReleaseInprogressView()
//             case songsApiConstants.success:
//                return showNewReleaseSuccessView()
//             case songsApiConstants.failure:
//                return showNewReleaseFailureView()
//             default:
//                null
//          }
//       }

//       return (
//          <SpotifySpecificMainContainer>
//             <SpotifyHeader
//                HeaderCss={HeaderCss}
//                isShowHeaderLogo={true}
//                passProps={props}
//             />
//             {showNewReleaseSongs()}
//          </SpotifySpecificMainContainer>
//       )
//    })
// )

const SpotifyNewReleaseRoute = () => (
   <SpotifySpecificMainContainer>ok</SpotifySpecificMainContainer>
)
export default SpotifyNewReleaseRoute
