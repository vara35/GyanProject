import styled, { css } from 'styled-components'

import tw from 'twin.macro'

export const MainContainer = styled.div`
   ${tw`bg-black h-screen`}
`

export const TailwindContainer = styled.div`
   ${tw`flex flex-col items-center justify-center md:flex-row text-xl `}
`

export const tailwindContainerCSS = css`
   /* background: linear-gradient(#db00ff, #0047ff); */
   ${tw`h-40`}
`
