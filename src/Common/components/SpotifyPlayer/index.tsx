import {
   AudioElement,
   PlayerContainer,
   PlayerImageContainer,
   PlayerImage,
   PlayerSongNameContainer,
   PlayerSongName,
   PlayerArtistName,
   SourceEle
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

   const playerSongText = playerSongName.slice(0, 15)
   const playerArtistText = playerArtist.slice(0, 15)

   return (
      <PlayerContainer>
         <PlayerImageContainer>
            <PlayerImage src={playerUrl} alt='Logo' />
            <PlayerSongNameContainer>
               <PlayerSongName>{playerSongText}</PlayerSongName>
               <PlayerArtistName>{playerArtistText}</PlayerArtistName>
            </PlayerSongNameContainer>
         </PlayerImageContainer>
         <AudioElement src={songUrl} controls autoplay>
            <SourceEle type='audio/mp3' />
         </AudioElement>
      </PlayerContainer>
   )
}

export default SpotifyPlayer
