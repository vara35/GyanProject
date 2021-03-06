import tw from 'twin.macro'
import styled from 'styled-components'

export const BackTextArrowContainer = styled.div`
   ${tw`flex items-center mt-6 ml-8`}
`

export const GenreHeading = styled.h1`
   ${tw`font-semibold text-2xl leading-8 text-white ml-8 mb-8`}
   margin-top : ${props => props.marginTop};
`

export const VerticalContainer = styled.div`
   ${tw`flex flex-col`}
`
