import tw from 'twin.macro'
import styled from 'styled-components'

export const PlatFormReviewFirstPageContanier = styled.div`
   ${tw`mt-6 mr-10 ml-12 pt-6 pr-12 pl-12 `}
   width: 768px;
   height: 1651px;
   margin-bottom: 262px;
   padding-bottom: 178px;
   border: solid 1px #d7dfe9;
   background-color: #ffffff;
`
export const BackTextEle = styled.p`
   ${tw`font-sans ml-1 h-4 text-xs`}
   width: 103px;
   line-height: 1.33;
   color: #7e858e;
`

export const PlatFormFirstPageText = styled.h1`
   ${tw`font-sans mt-0 mr-2 mb-1 ml-0 h-20 text-xs text-3xl`}
   width: 672px;
   line-height: 1.25;
   color: #000000;
`

export const PlatFormText = styled.p`
   ${tw`font-sans mr-2 ml-0 text-sm`}
   width: 672px;
   margin-top: ${props => props.marginLeft};
   color: ${props => props.color};

   line-height: 1.71;
`

export const PlatFormImage = styled.img`
   ${tw`font-sans mt-6 mr-2 mb-2 ml-0 h-20 text-xs text-3xl`}
   width: 672px;
   height: 328px;
`
export const ImageBottomTextEle = styled.p`
   ${tw`h-6 font-sans mt-2  mb-1 ml-0 text-sm `}
   margin-right: 69px;
   line-height: 1.71;
   width: ${props => props.width};
   font-size: ${props => props.fontSize};

   color: ${props => props.color};
`

export const PlatFormMiddleContainer = styled.div`
   ${tw``}
   width: 672px;
   height: 128px;
   opacity: 0.16;
   background-color: #d7dfe9;
   margin-top: 24px;
`

export const ButtonInReviewPage = styled.button`
   ${tw``}
   width: 70px;
   height: 40px;
   margin: 34px 39px 0 85px;
   padding: 8px 20px;
   border-radius: 4px;
   background-color: #0b69ff;
   color: #ffffff;
`

export const ReminderContainer = styled.div`
   ${tw``}
   width: 552px;
   height: 56px;
   margin: 0 0 24px 80px;
   padding: 16px 24px;
   border-radius: 4px;
   border: solid 1px #ffb800;
   background-color: #fff8e6;
`
