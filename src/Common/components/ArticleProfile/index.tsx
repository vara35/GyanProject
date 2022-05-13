import {
   Logo,
   NameAndDateContainer,
   Heading,
   Date,
   EllipseContainer,
   ElliseImage,
   ProfilewithEllipseMainContainer,
   HeadingAndDateContainer
} from './styledComponents'

interface ProfileProps {
   Url: string
   Name: string
   AlterText: string
   addThreeDots: boolean
}

const ProfilewithEllipse = (props: ProfileProps) => {
   const { Name, AlterText, Url, addThreeDots } = props
   console.log(addThreeDots)

   return (
      <ProfilewithEllipseMainContainer>
         <NameAndDateContainer>
            <Logo src={Url} alt='AlterText' />
            <HeadingAndDateContainer addThreeDots>
               <Heading>{Name}</Heading>
               <Date>• 06/20/2019 at 6:43 PM </Date>
            </HeadingAndDateContainer>
         </NameAndDateContainer>
         <EllipseContainer>
            {addThreeDots && (
               <ElliseImage src='https://res.cloudinary.com/image-link-getter/image/upload/v1648359358/Screenshot_2022-03-27_110434_oesthh.png' />
            )}
         </EllipseContainer>
      </ProfilewithEllipseMainContainer>
   )
}

export default ProfilewithEllipse
