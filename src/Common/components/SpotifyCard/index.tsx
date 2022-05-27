import { Link } from 'react-router-dom'

import {
   SpotifyCardMainContainer,
   CardButton,
   CardImage,
   CardHeading
} from './styledComponents'
interface SpotifyCardProps {
   cardHeading: string
   cardImgUrl: string
   id: number
}

const SpotifyCard = (props: SpotifyCardProps) => {
   const { cardHeading, cardImgUrl, id } = props
   return (
      <Link to={`/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
            </CardButton>
            <CardHeading>{cardHeading}</CardHeading>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyCard
