import tw from 'twin.macro'
import styled from 'styled-components'

export const YourMusicContainer = styled.div`
   ${tw`flex flex-row`}
   height: 100vh;
   background: #181818;
`

export const YourMusicUlContainer = styled.ul`
   ${tw`ml-8 overflow-y-auto`}
`
