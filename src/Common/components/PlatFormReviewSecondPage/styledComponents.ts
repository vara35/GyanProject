import tw from 'twin.macro'
import styled from 'styled-components'

export const PlatFormReviewSecondPageContainer = styled.div`
   ${tw`p-4 rounded mt-6 mr-20 mb-6 ml-10`}
   width: 264px;
   height: 394px;
   border: solid 1px #d7dfe9;
   margin-top: ${props => props.marginTop};
   height: ${props => props.height};
   width: ${props => props.width};
`
export const SecondPageImage = styled.img`
   ${tw`rounded mt-0 mr-0 mb-3 ml-0`}
   width: 232px;
   border-radius: 4px;
`

export const TendingTextEle = styled.h2`
   ${tw`h-4 font-sans font-black text-xs`}
   width: 195px;
   margin: 24px 160px 12px 39px;
   line-height: 1.33;
   color: #000000;
`
export const IconAndCommentsInSecondPage = styled.div`
   ${tw`flex flex-row justify-end items-center`}
`

export const ProvideFlexForIcons = styled.div`
   ${props =>
      props.isShow
         ? tw`flex flex-col justify-between`
         : tw`flex flex-row justify-between items-center`}
`
