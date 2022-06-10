import styled from 'styled-components'
import tw from 'twin.macro'

export const PlayerContainer = styled.div`
   ${tw`flex flex-row  items-center`};
   border-top: 0.5px solid #9b9b9b;
   height: 108px;
`
export const AudioElement = styled.audio`
   ${tw`ml-8 text-white`}
   width: 1024px;
   margin-left: 85px;

   &::-webkit-media-controls-play-button {
      background-color: #ffffff;
      border-radius: 50%;
   }
   &::-webkit-media-controls-panel {
      background: #181818;
      color: green;
   }
   &::-webkit-media-controls-current-time-display {
      color: #ffffff;
   }
   &::-webkit-media-controls-time-remaining-display {
      color: #ffffff;
   }
   &::-webkit-media-controls-timeline {
      background-color: blue;
      color: #ffffff;
   }
   &::-webkit-media-controls-mute-button {
      background-color: yellow !important;
   }
`

export const PlayerImageContainer = styled.div`
   ${tw`flex items-center`};
`

export const PlayerImage = styled.img`
   ${tw`h-14 w-14 my-6 ml-6 mr-2 rounded`};
`

export const PlayerSongNameContainer = styled.div`
   ${tw``};
`

export const PlayerSongName = styled.h3`
   ${tw`font-semibold text-base text-white`};
`

export const PlayerArtistName = styled.p`
   ${tw`font-semibold text-white text-xs `};
   color: #9b9b9b;
`
