import FollowingDomain from '../FollowingDomains'
import SuggestDomains from '../SuggestDomains'

import {
   LeftMenuContainer,
   LeftContainerLogo,
   AllDomainDescription,
   CapIcon,
   FollowingDomainContainer,
   MenuUlElement,
   SpanElement,
   YourPostContainer
} from './styledComponents'

const DomainNames = [
   {
      Name: 'Video Editing',
      id: 1
   },
   {
      Name: '3D Animation',
      id: 2
   },
   {
      Name: 'UI/UX designers',
      id: 3
   }
]

const suggestDomainNames = [
   {
      Name: 'Javascript',
      category: 'Follow',
      id: 1
   },
   {
      Name: 'Jabong',
      category: 'Follow',
      id: 2
   },
   {
      Name: 'React',
      category: 'Cancel',
      id: 3
   }
]

const LeftMenuConstants = {
   allDomainsText: 'ALL DOMAINS',
   followingDomainText: 'FOLLOWING DOMAIN',
   seeAllText: 'See all',
   suggestDomainText: 'SUGGEST DOMAIN',
   myPostsText: 'MY POSTS',
   number: 6
}

const LeftMenuUrl = {
   ibHubsLogo:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647758281/IB-Hubs_nbeuia.png',
   capIconsLogo:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647763451/Screenshot_2022-03-20_133349_xlarfw.png'
}

const LeftMenu = () => (
   <LeftMenuContainer>
      <LeftContainerLogo src={LeftMenuUrl.ibHubsLogo} />
      <AllDomainDescription>
         {LeftMenuConstants.allDomainsText}
      </AllDomainDescription>
      <FollowingDomainContainer>
         <AllDomainDescription>
            {LeftMenuConstants.followingDomainText}
         </AllDomainDescription>
         <CapIcon src={LeftMenuUrl.capIconsLogo} />
      </FollowingDomainContainer>
      <MenuUlElement>
         {DomainNames.map(eachDomain => (
            <FollowingDomain key={eachDomain.id} name={eachDomain.Name} />
         ))}
      </MenuUlElement>
      <AllDomainDescription>
         {LeftMenuConstants.seeAllText}
      </AllDomainDescription>
      <FollowingDomainContainer>
         <AllDomainDescription>
            {LeftMenuConstants.suggestDomainText}
         </AllDomainDescription>
         <CapIcon src={LeftMenuUrl.capIconsLogo} />
      </FollowingDomainContainer>
      <MenuUlElement>
         {suggestDomainNames.map(eachSuggest => (
            <SuggestDomains key={eachSuggest.id} suggestItem={eachSuggest} />
         ))}
      </MenuUlElement>
      <AllDomainDescription>
         {LeftMenuConstants.seeAllText}
      </AllDomainDescription>
      <FollowingDomainContainer>
         <AllDomainDescription>
            {LeftMenuConstants.myPostsText}
         </AllDomainDescription>
         <YourPostContainer>
            <SpanElement>{LeftMenuConstants.number}</SpanElement>
            <CapIcon src={LeftMenuUrl.capIconsLogo} />
         </YourPostContainer>
      </FollowingDomainContainer>
   </LeftMenuContainer>
)

export default LeftMenu
