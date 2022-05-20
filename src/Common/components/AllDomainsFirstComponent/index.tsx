import ProfilewithEllipse from '../ArticleProfile'
import InputBarComponenent from '../BottomInputBar'
import Linebreak from '../HorizontalLine'
import HeadingAndTags from '../HeadingAndTags'
import ImageAndDate from '../ImageAndDate'
import ProfileWithHeartIcon from '../ProfileWithHeartIcon'

import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import {
   ArticleComponentMainPage,
   Content,
   BottomContainer,
   CorrectLogo,
   DomainExpert,
   AppoveText,
   SecondContent,
   SeeAllNames
} from './styledComponents'

const ProfilewithEllipseImage = {
   url:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
}

const ContentText = `Zero UI is a style that’s been looming in the shadow for some time, but
   is just now emerging. The idea is easy to understand — the less the
   user has to think about the interface, the better and more natural it
   feels. John Brownlee explains the specifics,and how this style is
   changing everything.`

const SecondContentText = `I’m usually optimistic about it. And these difficult times just
   helped me reinforce that! I’m not sure if it’s the same for all the
   tech companies, but it seems to me that tech companies were little
   affected by all this.`

const seeAllText = 'See all comments'

const CorrectIcon =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652438530/Hover_3x_swcpq0.png'

const ApprovedText = 'Approved by'
const DomainText = 'Ana Arubia (UI/UX Domain Expert)'

const HeartsCountNumber = 4

const ArticleComponent = () => (
   <ArticleComponentMainPage>
      <ProfilewithEllipse
         Url={ProfilewithEllipseImage.url}
         Name='Ashoka T.'
         isHorizontal={false}
      />
      <HeadingAndTags />
      <Linebreak />
      <ImageAndDate
         Url={ProfilewithEllipseImage.url}
         Name='Augusto Cesar'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <Content>{ContentText}</Content>
         <BottomContainer>
            <CorrectLogo src={CorrectIcon} />
            <AppoveText>{ApprovedText}</AppoveText>
            <DomainExpert>{DomainText}</DomainExpert>
         </BottomContainer>
      </HeadingAndTagsContainer>
      <Linebreak />
      <HeadingAndTagsContainer>
         <ProfileWithHeartIcon
            Url={ProfilewithEllipseImage.url}
            Name='Ashoka T.'
            isHorizontal={true}
            HeartsCountNumber={HeartsCountNumber}
         />
         <HeadingAndTagsContainer>
            <SecondContent>{SecondContentText}</SecondContent>
            <SeeAllNames>{seeAllText}</SeeAllNames>
            <InputBarComponenent />
         </HeadingAndTagsContainer>
      </HeadingAndTagsContainer>
   </ArticleComponentMainPage>
)

export default ArticleComponent
