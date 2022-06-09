import styled from 'styled-components'
import tw from 'twin.macro'
import css from 'twin.macro'

export const SpotifyHomeMainContainer = styled.div`
   ${tw`flex flex-row`}
   background: #181818;
   height: 100vh;
`
export const CardsMainContainer = styled.div`
   ${tw`overflow-auto`};
`
export const EditorHeading = styled.h1`
   ${tw`ml-8 mb-8 text-white font-bold font-sans`}
   font-size:24px;
   line-height: 32px;
`

export const CardsUlContainer = styled.ul`
   ${tw`ml-8 flex flex-wrap overflow-y-auto`}
`

export const HeaderCss = css`
mt-80
`

export const EditorHeadingCss = css`
   mt-24
`

export const CategoryHeadingCss = css`
   mt-4
`
