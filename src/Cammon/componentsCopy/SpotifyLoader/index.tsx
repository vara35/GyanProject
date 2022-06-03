import { LoadingContainer, LoaderImage, LoadingText } from './styledComponents'

const loaderImage =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1653478237/Vector_v5j9mg.png'
const loading = 'Loading...'

const SpotifyLoader = () => (
   <LoadingContainer>
      <LoaderImage src={loaderImage} alt='Loader' />
      <LoadingText>{loading}</LoadingText>
   </LoadingContainer>
)

export default SpotifyLoader
