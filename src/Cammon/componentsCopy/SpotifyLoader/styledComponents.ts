import tw from 'twin.macro'
import styled from 'styled-components'

export const LoadingContainer = styled.div`
   ${tw`flex flex-col justify-center items-center`}
   height:60vh;
   width: 100vw;
`

export const LoaderImage = styled.img`
   ${tw``}
   width:144px;
   height: 58px;
`

export const LoadingText = styled.h2`
   ${tw`text-4xl leading-10 text-white mt-5 font-bold`}
`
