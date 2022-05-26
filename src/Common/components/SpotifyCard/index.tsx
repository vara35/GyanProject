import {
   SpotifyCardMainContainer,
   CardButton,
   CardImage,
   CardHeading
} from './styledComponents'

const SpotifyCard = () => (
   <SpotifyCardMainContainer>
      <CardButton type='button'>
         <CardImage src='https://res.cloudinary.com/image-link-getter/image/upload/v1653572729/Rectangle_480_cedyqi.png' />
      </CardButton>
      <CardHeading>Telugu Romance</CardHeading>
   </SpotifyCardMainContainer>
)

export default SpotifyCard
