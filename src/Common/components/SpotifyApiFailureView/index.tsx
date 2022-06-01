import { SpotifyApiFailureContainer, FailureImage } from './styledComponents'

const apiFailureImage =
   'https://yourwebsitefirst.com/wp-content/uploads/2017/06/Best-Practices-for-API-Error-Handling.jpg'

const SpotifyApiFailureView = () => (
   <SpotifyApiFailureContainer>
      <FailureImage src={apiFailureImage} alt='apiLogo' />
   </SpotifyApiFailureContainer>
)

export default SpotifyApiFailureView
