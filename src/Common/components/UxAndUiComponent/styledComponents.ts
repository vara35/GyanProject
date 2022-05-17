import tw from 'twin.macro'
import styled from 'styled-components'

export const UxAndUiComponentMainContainer = styled.div`
   ${tw`flex flex-row items-center`}
`
export const UiText = styled.h2`
   ${tw`h-8 font-sans font-black mt-5 mb-6`}
   width: 180px;
   margin-right: ${props => props.marginRight};
   margin-left: ${props => props.marginLeft}

   font-size: ${props => props.UiText};
`
