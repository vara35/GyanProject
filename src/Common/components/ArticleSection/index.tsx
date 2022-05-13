import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import ProfilewithEllipse from '../ArticleProfile'
import ArticleTag from '../ArticleTag'
import InputBarComponenent from '../BottomInputBar'
import Linebreak from '../HorizontalLine/'
import {
   ArticleComponentMainPage,
   WhatIsZeroHeading,
   GetTagsInRow,
   Content,
   BottomContainer,
   CorrectLogo,
   DomainExpert,
   AppoveText
} from './styledComponents'

const ArticleComponent = () => (
   <ArticleComponentMainPage>
      <ProfilewithEllipse
         addThreeDots={true}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Ashoka T.'
      />
      <WhatIsZeroHeading>
         What Is Zero UI? (And Why Is It Crucial to the Future of Design?)
      </WhatIsZeroHeading>
      <GetTagsInRow>
         <ArticleTag
            Url='https://res.cloudinary.com/image-link-getter/image/upload/v1652431382/tag_3x_lfir1a.png'
            AlterText='Tag'
            Name='ui discuss'
            addColor={false}
         />
         <ArticleTag
            addColor={false}
            Url='https://res.cloudinary.com/image-link-getter/image/upload/v1652431382/tag_3x_lfir1a.png'
            AlterText='Tag'
            Name='uisolver'
         />
      </GetTagsInRow>
      <Linebreak />
      <ProfilewithEllipse
         addThreeDots={false}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Augusto Cesar'
      />
      <Content>
         Zero UI is a style that’s been looming in the shadow for some time, but
         is just now emerging. The idea is easy to understand — the less the
         user has to think about the interface, the better and more natural it
         feels. John Brownlee explains the specifics,and how this style is
         changing everything.{' '}
      </Content>
      <BottomContainer>
         <CorrectLogo src='https://res.cloudinary.com/image-link-getter/image/upload/v1652438530/Hover_3x_swcpq0.png' />
         <AppoveText>Approved by</AppoveText>
         <DomainExpert> Ana Arubia (UI/UX Domain Expert)</DomainExpert>
      </BottomContainer>
      <Linebreak />
      <ProfilewithEllipse
         addThreeDots={false}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Ashoka T.'
      />
      <Content>
         I’m usually optimistic about it. And these difficult times just helped
         me reinforce that! I’m not sure if it’s the same for all the tech
         companies, but it seems to me that tech companies were little affected
         by all this.
      </Content>
      <InputBarComponenent />
   </ArticleComponentMainPage>
)

export default ArticleComponent
