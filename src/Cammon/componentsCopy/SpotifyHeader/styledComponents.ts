import tw from 'twin.macro'
import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
   ${tw`w-24 pt-6`}
   background: #040306;
   min-height: 100vh;
`
export const HeaderLogo = styled.img`
   ${tw`ml-3 mr-2`}
`

export const IconsContainer = styled.div`
   ${tw``}
   margin-top : ${props => props.marginTop};
  
`

export const HomeIconContainer = styled.div`
   ${tw`flex flex-col justify-center items-center text-center h-16 w-24 mt-4`}
   border-left: ${props => props.pathname === '/' && '6px solid #1ED760'};
   background: ${props => props.pathname === '/' && '#181818'};
  
`

export const ProfileContainer = styled.div`
   ${tw`flex flex-col justify-center items-center text-center h-16 w-24 mt-4`}
   border-left: ${props =>
      props.pathname === '/profile' && '6px solid #1ED760'};
      background: ${props => props.pathname === '/profile' && '#181818'};
`
export const YourMusicIconContainer = styled.div`
   ${tw`flex flex-col justify-center items-center text-center h-16 w-24 mt-4`}
   background: ${props => props.pathname === '/yourmusic' && '#181818'};
   border-left: ${props =>
      props.pathname === '/yourmusic' && '6px solid #1ED760'};
`
export const PlayListIconContainer = styled.div`
   ${tw`flex flex-col justify-center items-center text-center h-16 w-24 mt-4 `}
   border-left: ${props =>
      props.pathname === '/playlist' && '6px solid #1ED760'};
      background: ${props => props.pathname === '/playlist' && '#181818'};
`

export const HeaderRouteHeading = styled.p`
   ${tw`w-16 h-4 font-bold text-xs leading-3 text-white mt-1 `}
   line-height: 14px;
   color: #9b9b9b;
`

//margin-left: ${props => props.marginLeft};
