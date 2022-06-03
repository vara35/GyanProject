import { Link } from 'react-router-dom'

import {
   SpotifyCardMainContainer,
   CardButton,
   CardImage,
   CardHeading
} from './styledComponents'
interface SpotifyCardProps {
   cardImgUrl: string
   id: number | string
}

const SpotifyCategoryCard = (props: SpotifyCardProps) => {
   const { cardImgUrl, id } = props
   return (
      <Link to={`/category/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
            </CardButton>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyCategoryCard
