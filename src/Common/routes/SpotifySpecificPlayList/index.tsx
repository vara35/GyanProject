import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import SpotifyHeader from '../../components/SpotifyHeader'
import SongDetails from '../../components/SongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'
import SpecificEditorSong from '../../components/SpecificEditorSong'
import Player from '../../components/Player'

import {
   SpotifySpecificMainContainer,
   TableHeader,
   TableName,
   SongAndTableContainer,
   SpotifyHrLine,
   EditorsUlContainer
} from './styledComponents'

interface SpotifySpecificPlayListProps {
   specificPlayListStore: SpecificPlayListStore
   eachSong: {
      id: string
   }
   changeSongStatus: () => void
}

const songsApiConstants = {
   initial: 'INITIAL',
   in_Progress: 'InProgress',
   success: 'SUCCESS',
   failure: 'FAILURE'
}

@inject('specificPlayListStore')
@observer
class SpotifySpecificPlayList extends Component<SpotifySpecificPlayListProps> {
   componentDidMount() {
      const { specificPlayListStore } = this.props
      specificPlayListStore.getSpecificEditorData(this.props)
   }

   changeSongStatus = (previewUrl = '') => {
      const { specificPlayListStore } = this.props
      specificPlayListStore.changeSong(previewUrl)
   }

   showSongsSuccessView = () => {
      const { specificPlayListStore } = this.props
      return (
         <>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            <SongAndTableContainer>
               <SongDetails
                  specificPlayListStore={this.props.specificPlayListStore}
               />
               <TableHeader>
                  <TableName width='56px'>#</TableName>
                  <TableName width='258px'>Track </TableName>
                  <TableName width='300px'>Album</TableName>
                  <TableName width='200px'>Time</TableName>
                  <TableName width='250px'>Artist</TableName>
                  <TableName width='200px'>Added</TableName>
               </TableHeader>
               <SpotifyHrLine width='1278px' margin={true} />
               <EditorsUlContainer>
                  {specificPlayListStore.specificEditorsData.map(
                     (eachSong: any) => (
                        <SpecificEditorSong
                           songDetailsProps={eachSong}
                           key={eachSong.id}
                           changeSongStatus={this.changeSongStatus}
                        />
                     )
                  )}
               </EditorsUlContainer>
               <Player playerUrl={specificPlayListStore.songUrl} />
            </SongAndTableContainer>
         </>
      )
   }

   showSongsInprogressView = () => 'Ok'

   showEditorsongs = () => {
      const { specificPlayListStore } = this.props

      switch (specificPlayListStore.songStatus) {
         case songsApiConstants.in_Progress:
            return this.showSongsInprogressView()
         case songsApiConstants.success:
            return this.showSongsSuccessView()
         default:
            null
      }
   }

   render() {
      return (
         <SpotifySpecificMainContainer>
            {this.showEditorsongs()}
         </SpotifySpecificMainContainer>
      )
   }
}

export default SpotifySpecificPlayList
