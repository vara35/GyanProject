import ImageAndDate from '../ImageAndDate'

import {
   HeartIconContainer,
   HeartsCount,
   HeartImage,
   ProfileWithHeartIconMainContainer
} from './styledComponents'

const heartImageUrl =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652679036/Heart_-_16px.1_3x_csv8b7.png'

interface ProfileWithHeartIconProps {
   Url: string
   Name: string
   isHorizontal: boolean
   HeartsCountNumber: number
}

const ProfileWithHeartIcon = (props: ProfileWithHeartIconProps) => {
   const { Url, Name, isHorizontal, HeartsCountNumber } = props
   return (
      <ProfileWithHeartIconMainContainer>
         <ImageAndDate isHorizontal={isHorizontal} Name={Name} Url={Url} />
         <HeartIconContainer>
            <HeartsCount>{HeartsCountNumber}</HeartsCount>
            <HeartImage src={heartImageUrl} al='HeartLogo' />
         </HeartIconContainer>
      </ProfileWithHeartIconMainContainer>
   )
}

export default ProfileWithHeartIcon
