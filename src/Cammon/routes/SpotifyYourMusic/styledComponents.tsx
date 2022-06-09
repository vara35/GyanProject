import tw from 'twin.macro'
import css from 'twin.macro'
import styled from 'styled-components'

export const YourMusicContainer = styled.div`
   ${tw`flex flex-row`}
   height: 100vh;
   background: #181818;
`

export const YourMusicUlContainer = styled.ul`
   ${tw`ml-8 overflow-auto`}
`
export const VerticalContainerForYourMusic = styled.div`
   ${tw`flex flex-col`}
   width:100%;
`
export const GenreHeadingCss = css`
mt-24
`
