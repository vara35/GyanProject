import tw from 'twin.macro'
import styled from 'styled-components'
export const Logo = styled.img`
   ${tw`w-10 h-10 mt-0 mr-1.5 mb-6 ml-0`}
`

export const NameAndDateContainer = styled.div`
   ${tw`flex flex-row items-start h-7`}
`

export const HeadingAndDateContainer = styled.div`
   ${tw`flex`}
   ${props => (props.isHorizontal ? tw`flex-row items-end` : tw`flex-col`)}
`

export const Heading = styled.h1`
   ${tw`min-w-0 h-6 mt-0 mr-2 mb-0 ml-4 font-sans text-sm font-bold`}
`

export const Date = styled.p`
   ${tw`w-40 h-6 mt-0 mr-96 mb-2 ml-4 font-sans text-xs not-italic leading-tight text-gray-600 `}
   ${props => (props.isHorizontal ? tw`mb-0` : tw`mb-2`)}
`
