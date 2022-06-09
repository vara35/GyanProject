import {
   AudioElement,
   PlayerContainer,
   PlayerImageContainer,
   PlayerImage,
   PlayerSongNameContainer,
   PlayerSongName,
   PlayerArtistName
} from './styledComponents'

interface PlayerProps {
   playerSongUrl: string
   playerArtist: string
   playerSongName: string
   playerThumbnailUrl: string
}

const SpotifyPlayer = (props: PlayerProps) => {
   const {
      playerThumbnailUrl,
      playerArtist,
      playerSongUrl,
      playerSongName
   } = props

   const playerSongText =
      playerSongName === '' ? 'Unknown' : playerSongName.slice(0, 15)
   const playerArtistText =
      playerArtist === '' ? 'unknown' : playerArtist.slice(0, 15)
   const editedplayerThumbnailUrl =
      playerThumbnailUrl === '' || null
         ? 'https://res.cloudinary.com/image-link-getter/image/upload/v1654492068/empty-song-image_jz6lgx.jpg'
         : playerThumbnailUrl

   return (
      <PlayerContainer>
         <PlayerImageContainer>
            <PlayerImage src={editedplayerThumbnailUrl} alt='Logo' />
            <PlayerSongNameContainer>
               <PlayerSongName>{playerSongText}</PlayerSongName>
               <PlayerArtistName>{playerArtistText}</PlayerArtistName>
            </PlayerSongNameContainer>
         </PlayerImageContainer>
         <AudioElement
            src={playerSongUrl}
            controls
            autoplay
            type='audio/mpeg'
         ></AudioElement>
      </PlayerContainer>
   )
}

export default SpotifyPlayer
