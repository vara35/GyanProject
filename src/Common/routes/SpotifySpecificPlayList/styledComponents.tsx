import tw from 'twin.macro'
import styled from 'styled-components'

export const SpotifySpecificMainContainer = styled.div`
   ${tw`flex flex-row`}
   width: 1440px;
   height: 1024px;
   background: #181818;
`

export const TableHeader = styled.div`
   ${tw`flex flex-row  ml-8 `}
   width: 1300px;
`

export const TableName = styled.h2`
   ${tw`text-white font-sans font-semibold text-base leading-5`}
   color: #f8fafc;
   width: ${props => props.width};
`

export const SongAndTableContainer = styled.div`
   ${tw`flex flex-col`}
`

export const SpotifyHrLine = styled.hr`
   ${tw`mt-4 ml-8 h-0`}
   width: 1278px;
   border: 1px solid #475569;
`

export const EditorsUlContainer = styled.ul`
   ${tw`overflow-auto`}
`
