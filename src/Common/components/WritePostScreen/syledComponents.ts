import tw from 'twin.macro'
import styled from 'styled-components'

export const WritePostMainContainer = styled.div`
   ${tw`mt-12 mr-20 mb-8 ml-12 px-12 py-12 rounded-md border border-solid`}
   width: 1074px;
   height: 870px;
`
export const Heading = styled.h1`
   ${tw`h-10 mt-0 mr-24 mb-0 ml-0 font-sans text-3xl font-bold`},
   width: 808px;
`
export const GetTagInRow = styled.div`
   ${tw`flex items-center`};
   .rect-box-container {
      font-size: 12px;
   }
`
export const Content = styled.p`
   ${tw` mt-0 mr-0 mb-72 ml-0 text-xl font-sans text-gray-400`}
   width: 994px;
   height: 320px;
`
