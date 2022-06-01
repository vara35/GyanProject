import tw from 'twin.macro'
import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
   ${tw`w-24 pt-6`}
   height: 1024px;
   background: #040306;
`
export const HeaderLogo = styled.img`
   ${tw`ml-3 mr-2`}
`

export const IconsContainer = styled.div`
   ${tw``}
   margin-top : ${props => props.marginTop}
`

export const HeaderIconsContainer = styled.div`
   ${tw`flex flex-col justify-center  h-16 w-24 mt-4`}
   border-left: ${props =>
      props.pathname === '/spotifyhome' && '6px solid #1ED760'};
   background: ${props => props.pathname === '/spotifyhome' && '#181818'};
`

export const IconsContainer1 = styled.div`
   ${tw`flex flex-col justify-center h-16 w-24 mt-4`}
   border-left: ${props =>
      props.pathname === '/profile' && '6px solid #1ED760'};
      background: ${props => props.pathname === '/profile' && '#181818'};
`
export const IconsContainer2 = styled.div`
   ${tw`flex flex-col justify-center h-16 w-24 mt-4`}
   border-left: ${props =>
      props.pathname === '/yourmusic' && '6px solid #1ED760'};
      background: ${props => props.pathname === '/yourmusic' && '#181818'};
`
export const IconsContainer3 = styled.div`
   ${tw`flex flex-col justify-center h-16 w-24 mt-4`}
   border-left: ${props =>
      props.pathname === '/playlist' && '6px solid #1ED760'};
      background: ${props => props.pathname === '/playlist' && '#181818'};
`

export const ProfileName = styled.p`
   ${tw`w-16 h-4 font-bold text-xs leading-3 text-white mt-1 ml-8`}
   line-height: 14px;
   color: #9b9b9b;
   margin-left: ${props => props.marginLeft};
`
