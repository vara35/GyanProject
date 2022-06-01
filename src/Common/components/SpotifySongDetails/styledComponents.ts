import styled from 'styled-components'
import tw from 'twin.macro'

export const SongDetailsMainContainer = styled.div`
   ${tw`mt-6 ml-8 mt-8 mb-8`}
`

export const LeftArrowAndBackTextContainer = styled.div`
   ${tw`flex items-center`}
`

export const AlbumAndSongContainer = styled.div`
   ${tw`flex`}
`

export const BackTextButton = styled.button`
   ${tw`text-white leading-6 font-sans`}
   font-size: 16px;
   line-height: 24px;
   font-style: normal;
`

export const AlbumProfile = styled.img`
   ${tw`rounded-lg mt-6 mr-6`}
   height: 295px;
   width: 295px;
`
export const AlbumNameContainer = styled.div`
   ${tw`flex flex-col justify-end`}
`

export const EditorTextEle = styled.div`
   ${tw`font-bold text-white text-base leading-5 mt-2`}
   font-family: Roboto;
   font-style: normal;
`

export const AlbumName = styled.h1`
   ${tw`font-normal font-sans text-white  leading-5`}
   font-size: 80px;
   line-height: 105px;
`
