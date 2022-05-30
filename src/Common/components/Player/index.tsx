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
}

const Player = (props: PlayerProps) => {
   const { playerUrl } = props
   return (
      <PlayerContainer>
         <PlayerImageContainer>
            <PlayerImage src='https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png' />
            <PlayerSongNameContainer>
               <PlayerSongName>Tholiprema</PlayerSongName>
               <PlayerArtistName>Kala Bairava</PlayerArtistName>
            </PlayerSongNameContainer>
         </PlayerImageContainer>
         <AudioElement src={playerUrl} controls></AudioElement>
      </PlayerContainer>
   )
}

export default Player
