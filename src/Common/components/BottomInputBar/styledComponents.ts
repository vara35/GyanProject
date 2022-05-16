import styled from 'styled-components'
import tw from 'twin.macro'

export const InputBarMainContainer = styled.div`
   ${tw`flex items-center h-12 mt-8 mr-20 mb-0 ml-6 py-3 pr-4 pl-6 border rounded border-solid border`}
   width: 600px;
   border-color: #d7dfe9;
`
export const InputBar = styled.input`
   ${tw`h-6 w-32 mt-0 mb-0 ml-0 font-sans text-sm outline-none`}
   margin-right: 422px;
   color: rgba(126, 133, 142, 0.6);
`
export const SendIcon = styled.img`
   ${tw`w-4 h-3 my-1 `}
`
