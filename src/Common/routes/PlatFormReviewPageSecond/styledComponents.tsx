import tw from 'twin.macro'
import styled from 'styled-components'

export const ButtonElement = styled.button`
   ${tw`h-10 mt-12 mr-20 mb-6 ml-10 px-1 py-2 rounded`}
   width: 264px;
   background-color: #0b69ff;
   margin-top: ${props => props.marginTop};
   color: ${props => props.color};

   background: ${props => props.background};
`
