import tw from 'twin.macro'
import styled from 'styled-components'

export const TagContainer = styled.div`
   ${tw`flex bg-blue-100 w-24 h-6 mt-6 mr-3 mb-2 ml-4 pt-1 pr-2 pb-1 pl-0 rounded-sm`}
   background: ${props => props.bgColor}

`
export const TagName = styled.p`
   ${tw`w-14 h-4 mt-0 mr-0 mb-0 ml-2 font-sans text-xs leading-tight`}
   color: ${props => props.color}

`
export const TagImage = styled.img`
   ${tw`w-2 h-2 mt-1 mr-2 mb-1 ml-2`}
`
