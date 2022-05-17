import InputBarComponenent from '../BottomInputBar'
import Tag from '../ArticleTag'
import HeartAndComments from '../HeartAndComments'
import HrLine from '../HorizontalLine'
import ImageAndDate from '../ImageAndDate'
import ImageBasedComponents from '../ImageBasedComponents'
import UxAndUiComponent from '../UxAndUiComponent'

import { ContentBottomImage } from '../CommentsSection/styledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import { WhatIsZeroHeading } from '../ArticleSection/styledComponents'
import {
   ProvideFlex,
   ProvideSpaceBetween
} from '../HomeScreenTopComponent/styledComponents'
import { CommentsText } from '../IconsAndHeartAndComments/styledComponents'
import { ProvideSpaceBetweenForPlatFormPage } from '../PlatFormDomainPageComponent/styledComponents'
import { GetTagInRow } from '../WritePostScreen/syledComponents'
import {
   PlatFormSubMainContainer,
   Description,
   PlatFormSecondContainer
} from './styledComponents'

const platFormSubComponentUrl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652789866/Dovefedrick_2_3x_as5uso.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652689999/Default_3x_tfrdrz.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652690677/Default_3x_h6vjqw.png',
   heartIcon:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652679036/Heart_-_16px.1_3x_csv8b7.png',
   folderIcon:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699131/Icon_3x_tct3fm.png',
   platFormHeadingText: `The Evolution of UI/UX Designers Into Product Designers`,
   platFormDescription: `Zero UI is a style that’s been looming in the shadow for some time,`,
   commnetsNumber: 0
}

const PlatFormSubComponent = () => (
   <>
      <PlatFormSubMainContainer>
         <ProvideSpaceBetween>
            <ImageAndDate
               Url={platFormSubComponentUrl.url1}
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
               {platFormSubComponentUrl.platFormHeadingText}
            </WhatIsZeroHeading>
            <Description>
               {platFormSubComponentUrl.platFormDescription}
            </Description>
            <GetTagInRow>
               <ContentBottomImage src={platFormSubComponentUrl.url2} />
               <ContentBottomImage src={platFormSubComponentUrl.url3} />
            </GetTagInRow>
            <ProvideSpaceBetweenForPlatFormPage>
               <Tag />
               <ProvideFlex>
                  <HeartAndComments
                     heartImage={platFormSubComponentUrl.heartIcon}
                  />
                  <ImageBasedComponents
                     imageUrl={platFormSubComponentUrl.folderIcon}
                     height='15px'
                     margin='16px'
                  />
                  <CommentsText>
                     {platFormSubComponentUrl.commnetsNumber}
                  </CommentsText>
               </ProvideFlex>
            </ProvideSpaceBetweenForPlatFormPage>
         </HeadingAndTagsContainer>
         <HrLine />
         <InputBarComponenent />
      </PlatFormSubMainContainer>
      <PlatFormSecondContainer>
         <ProvideSpaceBetween>
            <ImageAndDate
               Url={platFormSubComponentUrl.url1}
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
      </PlatFormSecondContainer>
   </>
)

export default PlatFormSubComponent
