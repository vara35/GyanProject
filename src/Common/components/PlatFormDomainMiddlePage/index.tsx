import ImageAndDate from '../ImageAndDate'
import CorrectLogoAndApproveText from '../CorrectLogoAndApproveText'

import {
   ProvideFlex,
   ProvideSpaceBetween
} from '../HomeScreenTopComponent/styledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import HeartAndComments from '../HeartAndComments'
import ImageBasedComponents from '../ImageBasedComponents'
import { CommentsText } from '../IconsAndHeartAndComments/styledComponents'
import { PlatFormText } from './styledComponents'

const PlatFormDomainConstants = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698879/XS_3x_oslru1.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699082/Icon_3x_uiqtnb.png',
   url4:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699131/Icon_3x_tct3fm.png',
   whatIsHeading: `What Is Zero UI? (And Why Is It Crucial to the Future of Design?) `,
   comNum: '5 Comments',
   platFormContex1: `Zero UI is a style that’s been looming in the shadow for some time, but is just now emerging. The idea is easy to understand — the less the user has to think about the interface, the better and more natural it feels. John Brownlee explains the specifics,and how this style is changing everything. `,
   platFormContext2: `IS SIMPLICITY A real thing? Or is design the pursuit of something else entirely? A Logic 101 professor once explained to the class I was in that a major factorin screaming matches between people is the lack of a shared definition of a key term. `,
   correctIcon:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652438530/Hover_3x_swcpq0.png',
   approvedText: 'Approved by',
   domainText: 'Ana Arubia (UI/UX Domain Expert)',
   seeAllText: 'See all comments'
}
const PlatFormDomainMiddleContainer = () => (
   <>
      <ImageAndDate
         Url={PlatFormDomainConstants.url2}
         Name='Augusto Cesar .'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <PlatFormText>{PlatFormDomainConstants.platFormContex1}</PlatFormText>
         <ProvideSpaceBetween>
            <CorrectLogoAndApproveText />
            <ProvideFlex>
               <HeartAndComments heartImage={PlatFormDomainConstants.url3} />
               <ImageBasedComponents
                  imageUrl={PlatFormDomainConstants.url4}
                  height='15px'
                  margin='16px'
               />
               <CommentsText>{PlatFormDomainConstants.comNum}</CommentsText>
            </ProvideFlex>
         </ProvideSpaceBetween>
      </HeadingAndTagsContainer>
   </>
)

export default PlatFormDomainMiddleContainer
