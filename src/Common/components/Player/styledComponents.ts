import styled from 'styled-components'
import tw from 'twin.macro'

export const AudioElement = styled.audio`
   ${tw`ml-8 mb-8`}
   height: 108px;
   width: 1024px;
   margin-left: 85px;
`

export const PlayerContainer = styled.div`
   ${tw`flex items-center`};
   border-top: 0.5px solid #9b9b9b;
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
