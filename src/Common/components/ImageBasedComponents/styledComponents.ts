import tw from 'twin.macro'
import styled from 'styled-components'

export const ImageBasedIcon = styled.img`
   ${tw``}
  height :  ${props => props.height};
  width : ${props => props.width};
  margin-left :  ${props => props.margin}



`
export const ImageBasedContainer = styled.div`
   ${tw`bg-blue-200 `}
   background-color :  ${props => props.color}
   color: #ffbbd3;
   font-size: 6.6px;
   line-height: 1.71;
   border-radius: 50%;
   width: 15px;
   height: 15px;
   margin: 0 3.8px;
   padding: 1.9px;
`
