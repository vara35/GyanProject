import { WhatIsZeroHeading } from '../ArticleSection/styledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import { ProvideSpaceBetween } from '../HomeScreenTopComponent/styledComponents'
import ImageAndDate from '../ImageAndDate'
import UxAndUiComponent from '../UxAndUiComponent'
import { PlatFormSubMainContainer, Description } from './styledComponents'

const platFormSubComponentUrl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652789866/Dovefedrick_2_3x_as5uso.png',
   platFormHeadingText: `The Evolution of UI/UX Designers Into Product Designers`,
   platFormDescription: `Zero UI is a style that’s been looming in the shadow for some time,`
}

const PlatFormSubComponent = () => (
   <PlatFormSubMainContainer>
      <ProvideSpaceBetween>
         <ImageAndDate Url={platFormSubComponentUrl.url1} Name='Ashoka T. ' />
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
            {platFormSubComponentUrl.platFormHeadingText}
         </WhatIsZeroHeading>
         <Description>
            {platFormSubComponentUrl.platFormDescription}
         </Description>
      </HeadingAndTagsContainer>
   </PlatFormSubMainContainer>
)

export default PlatFormSubComponent
