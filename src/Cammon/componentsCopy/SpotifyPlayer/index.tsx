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
   playerUrl: string
   playerArtist: string
   playerSongName: string
   songUrl: string
}
const playerImage =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png'

const SpotifyPlayer = (props: PlayerProps) => {
   const { playerUrl, songUrl, playerArtist, playerSongName } = props

   const playerSongText =
      playerSongName === '' ? 'Unknown' : playerSongName.slice(0, 15)
   const playerArtistText =
      playerArtist === '' ? 'unknown' : playerArtist.slice(0, 15)
   const editedPlayerUrl =
      playerUrl === ''
         ? 'https://res.cloudinary.com/image-link-getter/image/upload/v1654492068/empty-song-image_jz6lgx.jpg'
         : playerUrl

   return (
      <PlayerContainer>
         <PlayerImageContainer>
            <PlayerImage src={editedPlayerUrl} alt='Logo' />
            <PlayerSongNameContainer>
               <PlayerSongName>{playerSongText}</PlayerSongName>
               <PlayerArtistName>{playerArtistText}</PlayerArtistName>
            </PlayerSongNameContainer>
         </PlayerImageContainer>
         <AudioElement
            src={songUrl}
            controls
            autoplay
            type='audio/mpeg'
         ></AudioElement>
      </PlayerContainer>
   )
}

export default SpotifyPlayer
