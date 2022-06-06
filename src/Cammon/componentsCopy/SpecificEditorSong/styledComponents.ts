import tw from 'twin.macro'
import styled from 'styled-components'

export const EditorSongListContainer = styled.li`
   ${tw`flex flex-row  mt-4 cursor-pointer mb-4 pl-8 pt-2 pb-2`}
   width:1350px;
   background-color: ${props => (props.bgColor ? '#303030' : '')};
`

export const EditorSongButtonEle = styled.button``

export const PopularityImage = styled.img`
   ${tw`h-4 w-8`}
`
