import HomeScreenTopComponent from '../HomeScreenTopComponent'
import ImageAndDate from '../ImageAndDate'
import UxAndUiComponent from '../UxAndUiComponent'
import Tag from '../ArticleTag'
import IconsAndHeartAndComments from '../IconsAndHeartAndComments'
import HrLine from '../HorizontalLine'

import { ProvideSpaceBetween } from '../HomeScreenTopComponent/styledComponents'
import {
   ArticleComponentMainPage,
   WhatIsZeroHeading
} from '../ArticleSection/styledComponents'
import {
   HeadingAndTagsContainer,
   ImageAndCommentsContainerForalignSelf
} from '../HeadingAndTags/styledComponents'
import HeartAndComments from '../HeartAndComments'

const PlatFormDomainConstants = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698922/XS_3x_l19lie.png',
   WhatIsHeading: `What Is Zero UI? (And Why Is It Crucial to the Future of Design?) `
}

const PlatFormDomainPageComponent = () => (
   <>
      <HomeScreenTopComponent />
      <ArticleComponentMainPage>
         <ProvideSpaceBetween>
            <ImageAndDate
               Url={PlatFormDomainConstants.url1}
               Name='Ashoka T. '
            />
            <UxAndUiComponent
               height='48px'
               color='#0b69ff'
               fontSize='18px'
               uiText1='14px'
               marginRight='0px'
            />
         </ProvideSpaceBetween>
         <HeadingAndTagsContainer>
            <WhatIsZeroHeading>
               {PlatFormDomainConstants.WhatIsHeading}
            </WhatIsZeroHeading>
         </HeadingAndTagsContainer>
         <HrLine />
      </ArticleComponentMainPage>
   </>
)

export default PlatFormDomainPageComponent
