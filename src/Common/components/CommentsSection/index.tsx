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

const profileObj = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png',
   contentBottomImage1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652689999/Default_3x_tfrdrz.png',
   contentBottomImage2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652690677/Default_3x_h6vjqw.png',
   contentBottomImage3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652691967/Default_3x_uickcf.png'
}

const contentTextObj = {
   text1: `Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
}

const CommentsComponents = () => (
   <MainContainer>
      <ProfilewithEllipse Url={profileObj.url1} Name='Ashoka T.' />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={contentTextObj.text1} />
         <ImageAndCommentsContainerForalignSelf>
            <GetTagInRow>
               <ContentBottomImage src={profileObj.contentBottomImage1} />
               <ContentBottomImage src={profileObj.contentBottomImage2} />
            </GetTagInRow>
            <IconsAndHeartAndComments />
         </ImageAndCommentsContainerForalignSelf>
      </HeadingAndTagsContainer>
      <Linebreak />
      <ProfileWithHeartIcon
         Url={profileObj.url2}
         Name='Ashoka T.'
         isHorizontal={true}
         HeartsCountNumber={4}
      />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={contentTextObj.text1} />
         <ContentBottomImage src={profileObj.contentBottomImage3} />
      </HeadingAndTagsContainer>
      <ProfileWithHeartIcon
         Url={profileObj.url2}
         Name='Luke S.'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <DescriptionOfComments ContentText={contentTextObj.text1} />
         <InputBarComponenent />
      </HeadingAndTagsContainer>
   </MainContainer>
)
export default CommentsComponents
