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
}
const playerImage =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png'

const Player = (props: PlayerProps) => {
   const { playerUrl, playerArtist, playerSongName } = props

   const playerSongText = playerSongName.slice(0, 15)
   const playerArtistText = playerArtist.slice(0, 15)

   return (
      <PlayerContainer>
         <PlayerImageContainer>
            <PlayerImage src={playerImage} />
            <PlayerSongNameContainer>
               <PlayerSongName>{playerSongText}</PlayerSongName>
               <PlayerArtistName>{playerArtistText}</PlayerArtistName>
            </PlayerSongNameContainer>
         </PlayerImageContainer>
         <AudioElement src={playerUrl} controls></AudioElement>
      </PlayerContainer>
   )
}

export default Player
