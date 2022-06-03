import tw from 'twin.macro'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
   ${tw`flex flex-row `}
   height:1024px;
   background: #181818;
`

export const UserDetailsContainer = styled.div`
   ${tw`flex flex-col items-center`}
   margin-top:316px;
   margin-left: 508px;
   margin-right: 648px;
   margin-bottom: 348px;
`
export const UserName = styled.p`
   ${tw`w-56 font-bold text-white text-center mt-6 font-sans text-white`}
   width: 228px;
   font-size: 38px;
   line-height: 63px;
`
export const FollowersAndPlayListContainer = styled.div`
   ${tw`flex flex-row items-center`}
`

export const FollowersContainer = styled.div`
   ${tw`flex flex-col items-center mr-5 ml-3`}
`
export const FollowersCount = styled.h3`
   ${tw`w-4 h-4 font-bold text-sm leading-4 mt-4 mb-2`}
   font-family: 'Lato';
   color: #1db954;
`

export const FollowersText = styled.p`
   ${tw`h-4 w-20 font-semibold text-sm leading-4 text-center font-sans`}
   letter-spacing: 0.04em;
   color: #9b9b9b;
`

export const LogoutButton = styled.button`
   ${tw`flex flex-col items-center mt-8 px-6 py-2 font-bold text-xs leading-4 font-sans text-white rounded-2xl border border-solid`}
`
