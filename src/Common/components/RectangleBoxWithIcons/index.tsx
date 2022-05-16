import RectangleIcon from '../RectAngleIcon'

import { RectangleBoxMainContainer } from './styledComponents'

const RectangleBoxUrl = {
   icon1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652503754/Icon_3x_aqgcs7.png',
   icon2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652504016/Icon_3x_xjo2bv.png',
   icon3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652503952/Union_3x_bzaxhr.png'
}

const RectangleBox = () => (
   <RectangleBoxMainContainer className='rect-box-container'>
      <RectangleIcon link={RectangleBoxUrl.icon1} />
      <RectangleIcon link={RectangleBoxUrl.icon2} />
      <RectangleIcon link={RectangleBoxUrl.icon3} />
   </RectangleBoxMainContainer>
)

export default RectangleBox
