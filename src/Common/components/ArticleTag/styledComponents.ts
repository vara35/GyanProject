import tw, { theme } from 'twin.macro'
import styled from 'styled-components'

export const TagContainer = styled.div(({ addColor }) => [
   tw`flex bg-blue-100 w-24 h-6 mt-8 mr-4 mb-9 ml-0 pt-1 pr-2 pb-1 pl-0 rounded-sm`
])

export const TagName = styled.p`
   ${tw`w-14 h-4 mt-0 mr-0 mb-0 ml-2 font-sans text-xs leading-tight text-blue-800`}
`
export const TagImage = styled.img`
   ${tw`w-2 h-2 mt-1 mr-2 mb-1 ml-2`}
`
