import tw, { theme } from 'twin.macro'
import styled from 'styled-components'

export const ArticleComponentMainPage = styled.div`
   ${tw`text-black container mt-9 mr-20 mb-9 ml-20 pt-9 pr-9 rounded-sm	bg-white	border rounded border-gray-400`}
   width: 1072px;
   height: 653px;
   margin: 32px 80px 32px 48px;
   padding: 32px 24px;
`
export const WhatIsZeroHeading = styled.div`
   ${tw`text-black container mt-2 mr-6 mb-6 ml-12 font-sans text-gray-600 font-black leading-tight text-2xl text-blue-600`}
   width: 688px;
   height: 32px;
`

export const GetTagsInRow = styled.div`
   ${tw`flex`}
`
export const Linebreak = styled.hr`
   ${tw`h-px mt-4 mr-0 mb-6 ml-1 text-gray-400`}
   width: 1020px;
`

export const Content = styled.p`
   ${tw`h-12 mt-1 mr-0 mb-5 ml-12 text-sm font-sans leading-tight text-gray-500`}
   width: 976px;
`
export const BottomContainer = styled.div`
   ${tw`flex items-center ml-12`}
`
export const AppoveText = styled.p`
   ${tw`w-16 h-4 mt-6 mr-0 mb-8 ml-2 text-xs`}
`
export const CorrectLogo = styled.img`
   ${tw`w-6 h-6 mt-5 mr-4 mb-6 ml-2`}
`
export const DomainExpert = styled.div`
   ${tw`h-4 mt-6 mr-0 mb-8 ml-3 font-sans text-sm font-black text-blue-800`}
   width: 189px;
`
