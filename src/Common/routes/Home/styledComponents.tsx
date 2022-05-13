import exp from 'constants'
import styled, { css } from 'styled-components'

import tw from 'twin.macro'

export const TailwindContainer = styled.div`
   ${tw`flex flex-col items-center justify-center md:flex-row text-xl `}
`

export const tailwindContainerCSS = css`
   /* background: linear-gradient(#db00ff, #0047ff); */
   ${tw`h-40`}
`
