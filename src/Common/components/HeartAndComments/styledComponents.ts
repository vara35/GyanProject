import tw from 'twin.macro'
import styeled from 'styled-components'
import styled from 'styled-components'
export const HeartAndCommentsContainer = styled.div`
   ${tw`flex items-center`}
`

export const HeartIcon = styled.img`
   ${tw``}
   width: 16px;
   height: 14px;
   margin: 6px 4px 4px 10px;
`
export const CommentsNumber = styled.p`
   ${tw`w-5 h-6 font-sans`}
   margin: 0 0 0 4px;
   font-size: 15px;
   line-height: 1.5;
   color: #ff0b37;
`
