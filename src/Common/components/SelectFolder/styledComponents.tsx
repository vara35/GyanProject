import tw from 'twin.macro'
import styled from 'styled-components'

export const SelectFolderMainContainer = styled.div`
   ${tw`flex items-center justify-between rounded mt-6 mr-10 mb-5 ml-12 pt-3 pr-4 pb-1 pl-5`}
   width: 485px;
   height: 56px;
   border: solid 1px #d7dfe9;
`

export const SelectFolderHeading = styled.h1`
   ${tw`font-sans font-bold`}
   width: 396px;
   color: #171f46;
   color: ${props => props.color};
   font-size: ${props => props.fontSize};

   width: ${props => props.width};
   font-weight: normal;
`

export const SelectFolderHeadingForFolder = styled.h1`
   ${tw`font-sans font-bold`}
   width: 396px;
   margin: 2px 2px 4px 12px;
   color: #171f46;
   color: ${props => props.color};
   font-size: ${props => props.fontSize};

   width: ${props => props.width};
   font-weight: normal;
`
