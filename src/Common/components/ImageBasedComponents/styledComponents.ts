import tw from 'twin.macro'
import styled from 'styled-components'

export const ImageBasedIcon = styled.img`
   ${tw``}
  height :  ${props => props.height};
  width : ${props => props.height};
  margin-left :  ${props => props.margin};


`
export const ImageBasedContainer = styled.div`
   ${tw`bg-blue-200 flex flex-row justify-center items-center`}
   background-color :  ${props => props.color}
   color: #ffbbd3;
   line-height: 1.71;
   border-radius: 50%;
   height : ${props => props.height};

   width : ${props => props.height};
   margin: 0 3.8px;
   padding: 1.9px;
   font-size: ${props => props.fontSize};

`
