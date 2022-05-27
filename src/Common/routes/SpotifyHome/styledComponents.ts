import tw from 'twin.macro'
import styled from 'styled-components'

export const SpotifyHomeMainContainer = styled.div`
   ${tw`flex flex-row `}
   background: #181818;
   width: 1440px;
   min-height: 2265px;
`
export const CardsMainContainer = styled.div`
   ${tw``};
`
export const EditorHeading = styled.h1`
   ${tw`mt-24 ml-8 mb-8 text-white font-bold font-sans`}
   font-size:24px;
   line-height: 32px;
   margin-top: ${props => props.marginTop};
   margin-bottom: ${props => props.marginBottom};
`

export const CardsUlContainer = styled.ul`
   ${tw`ml-8 flex flex-wrap`}
`
