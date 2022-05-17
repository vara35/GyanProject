import ProfilewithEllipse from '../ArticleProfile'
import InputBarComponenent from '../BottomInputBar'
import DescriptionOfComments from '../CommentsDescription'
import Linebreak from '../HorizontalLine'
import ProfileWithHeartIcon from '../ProfileWithHeartIcon'

import {
   HeadingAndTagsContainer,
   ImageAndCommentsContainerForalignSelf
} from '../HeadingAndTags/styledComponents'
import { GetTagInRow } from '../WritePostScreen/syledComponents'
import IconsAndHeartAndComments from '../IconsAndHeartAndComments'
import { MainContainer, ContentBottomImage } from './styledComponents'

const ProfileObj = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   ContentBottomImage1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652689999/Default_3x_tfrdrz.png',
   ContentBottomImage2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652690677/Default_3x_h6vjqw.png',
   ContentBottomImage3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652691967/Default_3x_uickcf.png'
}

const ContentTextObj = {
   Text1: `Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
}

const CommentsComponents = () => (
   <MainContainer>
      <ProfilewithEllipse Url={ProfileObj.url1} Name='Ashoka T.' />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={ContentTextObj.Text1} />
         <ImageAndCommentsContainerForalignSelf>
            <GetTagInRow>
               <ContentBottomImage src={ProfileObj.ContentBottomImage1} />
               <ContentBottomImage src={ProfileObj.ContentBottomImage2} />
            </GetTagInRow>
            <IconsAndHeartAndComments />
         </ImageAndCommentsContainerForalignSelf>
      </HeadingAndTagsContainer>
      <Linebreak />
      <ProfileWithHeartIcon
         Url={ProfileObj.url2}
         Name='Ashoka T.'
         isHorizontal={true}
         HeartsCountNumber={4}
      />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={ContentTextObj.Text1} />
         <ContentBottomImage src={ProfileObj.ContentBottomImage3} />
      </HeadingAndTagsContainer>
      <ProfileWithHeartIcon
         Url={ProfileObj.url2}
         Name='Luke S.'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={ContentTextObj.Text1} />
         <InputBarComponenent />
      </HeadingAndTagsContainer>
   </MainContainer>
)
export default CommentsComponents
