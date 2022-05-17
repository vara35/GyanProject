import tw from 'twin.macro'
import styled from 'styled-components'

export const TagContainer = styled.div`
   ${tw`flex bg-blue-100 w-24 h-6 mt-8 mr-4 mb-8 ml-0 pt-1 pr-2 pb-1 pl-0 rounded-sm`}
   background: ${props => props.bgColor}

   width: 88px;
  margin: 24px 13px 32px 17px;
  padding: 3px 8px 5px;
  border-radius: 2px;
`

export const TagName = styled.p`
   ${tw`w-14 h-4 mt-0 mr-0 mb-0 ml-2 font-sans text-xs leading-tight`}
   color: ${props => props.color}

   width: 57px;
   height: 16px;
   margin: 0 0 0 8px;
   font-family: Rubik;
   font-size: 12px;

`
export const TagImage = styled.img`
   ${tw`w-2 h-2 mt-1 mr-2 mb-1 ml-2`}

   width: 7px;
   height: 7px;
   margin: 5px 8px 4px 0;
`
