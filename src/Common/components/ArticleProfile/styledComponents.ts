import tw from 'twin.macro'
import styled from 'styled-components'
export const Logo = styled.img`
   ${tw`mt-0 mr-1.5 mb-3 ml-0`}
   width: 40px;
   height: 40px;
`

export const ProfilewithEllipseMainContainer = styled.div`
   ${tw`flex flex-row justify-between`}
`

export const NameAndDateContainer = styled.div`
   ${tw`flex flex-row items-start`}
`

export const Heading = styled.h1`
   ${tw`w-16 h-6 mt-0 mr-9 mb-8 ml-4 font-sans`}
`
export const Date = styled.p`
   ${tw`w-40 h-6 mt-5 mr-96 mb-2 ml-4 font-sans text-xs not-italic leading-tight text-gray-600`}
`
export const EllipseContainer = styled.div``

export const ElliseImage = styled.img`
   ${tw`w-3.5 h-1.5 mt-0 mr-3 mb-4 ml-0`}
   margin: 0 6px 15px 0;
`
export const HeadingAndDateContainer = styled.div(({ addThreeDots }) => [
   addThreeDots ? tw`flex flex-col items-start` : tw`flex flex-row `,
   console.log(addThreeDots)
])
