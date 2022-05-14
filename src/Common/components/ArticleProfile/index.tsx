import ImageAndDate from '../ImageAndDate'

import {
   EllipseContainer,
   ElliseImage,
   ProfilewithEllipseMainContainer
} from './styledComponents'

interface ProfileProps {
   Url: string
   Name: string
   isHorizontal?: boolean
}

const ProfilewithEllipse = (props: ProfileProps) => {
   const { Name, Url, isHorizontal } = props

   return (
      <ProfilewithEllipseMainContainer>
         <ImageAndDate Name={Name} Url={Url} isHorizontal={isHorizontal} />
         <EllipseContainer>
            <ElliseImage src='https://res.cloudinary.com/image-link-getter/image/upload/v1648359358/Screenshot_2022-03-27_110434_oesthh.png' />
         </EllipseContainer>
      </ProfilewithEllipseMainContainer>
   )
}

export default ProfilewithEllipse
