import tw from 'twin.macro'
import styled from 'styled-components'

export const YourMusicContainer = styled.li`
   ${tw`mb-8`}
   width: 1100px;
`

export const YourMusicSongButton = styled.button`
   ${tw`flex flex-row justify-between items-center`}
   width: 1100px;
`
export const SongImageAndDetailsContainer = styled.div`
   ${tw`flex flex-row items-center`}
`
export const Thumbnail = styled.img`
   width: 60px;
   height: 60px;
`

export const YourMusicSongDetails = styled.div`
   ${tw`text-left`}
`
export const YourMusicSongName = styled.h2`
   ${tw`ml-4 text-white font-bold leading-5 text-base`}
`

export const YourMusicDescription = styled.p`
   ${tw`text-xs text-white leading-4 ml-4 mt-1`}
   color: #9B9B9B;
`
