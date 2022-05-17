import tw from 'twin.macro'
import styled from 'styled-components'

export const Button = styled.button`
   ${tw`min-w-0 h-10 mr-8 ml-0 rounded px-4 py-2 text-sm font-sans text-white`}
   ${props => (props.bgColor ? tw`bg-gray-400` : tw`bg-blue-800 `)},
   color: ${props => props.color};
`
export const ButtonMainContainer = styled.div`
   ${tw`flex justify-end items-center`}
`
