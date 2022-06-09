import tw from 'twin.macro'
import css from 'twin.macro'
import styled from 'styled-components'

export const SpotifySpecificMainContainer = styled.div`
   ${tw`flex flex-row`}
   height: 100vh;
   background: #181818;
`

export const TableHeader = styled.div`
   ${tw`flex flex-row  ml-8 `}
   width: 1300px;
`

export const TableName = styled.p`
   ${tw`text-white font-semibold leading-5 mr-2 text-base`}
   color: #f8fafc;
   width: ${props => props.width};
   font-family: 'Assistant';
`

export const SongAndTableContainer = styled.div`
   ${tw`flex flex-col`}
   width:100%;
`

export const SpotifyHrLine = styled.hr`
   ${tw`mt-4 h-0`}
   border: 1px solid #475569;
   width: ${props => props.width};
   ${props => (props.margin ? tw`ml-8` : tw`ml-0`)}
`

export const EditorsUlContainer = styled.ul`
   ${tw`overflow-y-auto`}
   height:480px;
`
export const HashCss = css`
 w-14
`
export const TrackHeadingCss = css`
w-64

`
export const AlbumCss = css`
w-80

`

export const TimeHeadingCss = css`
w-52
`
export const ArtistHeadingCss = css`
w-64
`
