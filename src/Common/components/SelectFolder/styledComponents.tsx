import tw from 'twin.macro'
import styled from 'styled-components'

export const SelectFolderMainContainer = styled.div`
   ${tw`flex items-center justify-between`}
   width: 485px;
   height: 56px;
   margin: 24px 42px 20px 48px;
   padding: 12px 17px 4px 20px;
   border-radius: 4px;
   border: solid 1px #d7dfe9;
`

export const SelectFolderHeading = styled.h1`
   ${tw`h-4 font-sans`}
   width: 396px;
   margin: 0 2px 4px 12px;
   font-weight: 600;
   color: #171f46;
   color: ${props => props.color};
   font-size: ${props => props.fontSize};

   width: ${props => props.width};
   font-weight: normal;
`
