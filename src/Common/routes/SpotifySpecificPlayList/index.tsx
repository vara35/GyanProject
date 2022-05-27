import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import SpotifyHeader from '../../components/SpotifyHeader'
import SongDetails from '../../components/SongDetails'
import SpecificPlayListStore from '../../stores/SpecificPlayListStore'

import {
   SpotifySpecificMainContainer,
   TableHeader,
   TableName,
   SongAndTableContainer,
   SpotifyHrLine
} from './styledComponents'

interface SpotifySpecificPlayListProps {
   specificPlayListStore: SpecificPlayListStore
}

@inject('specificPlayListStore')
@observer
class SpotifySpecificPlayList extends Component<SpotifySpecificPlayListProps> {
   componentDidMount() {
      const { specificPlayListStore } = this.props
      specificPlayListStore.getSpecificEditorData(this.props)
   }

   render() {
      return (
         <SpotifySpecificMainContainer>
            <SpotifyHeader marginTop='304px' isShowHeaderLogo={true} />
            <SongAndTableContainer>
               <SongDetails />
               <TableHeader>
                  <TableName width='56px'>#</TableName>
                  <TableName width='258px'>Track </TableName>
                  <TableName width='300px'>Album</TableName>
                  <TableName width='200px'>Time</TableName>
                  <TableName width='250px'>Artist</TableName>
                  <TableName width='200px'>Added</TableName>
               </TableHeader>
               <SpotifyHrLine />
            </SongAndTableContainer>
         </SpotifySpecificMainContainer>
      )
   }
}

export default SpotifySpecificPlayList
