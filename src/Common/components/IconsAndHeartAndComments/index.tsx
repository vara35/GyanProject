import ImageBasedComponents from '../ImageBasedComponents'
import HeartAndComments from '../HeartAndComments'

import { CommentsText, ImageAndCommentsContainer } from './styledComponents'

const IconsAndHeartAndCommentsUrl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698879/XS_3x_oslru1.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698922/XS_3x_l19lie.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699082/Icon_3x_uiqtnb.png',
   url4:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699131/Icon_3x_tct3fm.png'
}

const CommentsNumAndText = '5 comments'

const IconsAndHeartAndComments = () => (
   <ImageAndCommentsContainer>
      <ImageBasedComponents
         imageUrl={IconsAndHeartAndCommentsUrl.url1}
         height='15px'
      />
      <ImageBasedComponents height='15px' color='#ffffff' />
      <ImageBasedComponents
         imageUrl={IconsAndHeartAndCommentsUrl.url2}
         height='15px'
      />
      <ImageBasedComponents height='15px' color='#ffbbd3' />
      <HeartAndComments heartImage={IconsAndHeartAndCommentsUrl.url3} />
      <ImageBasedComponents
         imageUrl={IconsAndHeartAndCommentsUrl.url4}
         height='15px'
         margin='16px'
      />
      <CommentsText>{CommentsNumAndText}</CommentsText>
   </ImageAndCommentsContainer>
)

export default IconsAndHeartAndComments
