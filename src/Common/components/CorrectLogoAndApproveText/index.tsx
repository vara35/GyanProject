import {
   AppoveText,
   BottomContainer,
   CorrectLogo,
   DomainExpert
} from '../AllDomainsFirstComponent/styledComponents'

const PlatFormDomainConstants = {
   correctIcon:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652438530/Hover_3x_swcpq0.png',
   approvedText: 'Approved by',
   domainText: 'Ana Arubia (UI/UX Domain Expert)',
   seeAllText: 'See all comments'
}

const CorrectLogoAndApproveText = () => (
   <BottomContainer>
      <CorrectLogo src={PlatFormDomainConstants.correctIcon} />
      <AppoveText>{PlatFormDomainConstants.approvedText}</AppoveText>
      <DomainExpert>{PlatFormDomainConstants.domainText}</DomainExpert>
   </BottomContainer>
)

export default CorrectLogoAndApproveText
