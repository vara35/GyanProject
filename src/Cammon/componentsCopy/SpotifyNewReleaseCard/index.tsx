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
   id: number | string
   isText?: boolean
}

const SpotifyNewReleaseCard = (props: SpotifyCardProps) => {
   const { cardHeading, cardImgUrl, id, isText = true } = props
   const editedCardHeading = cardHeading.slice(0, 16)
   return (
      <Link to={`/newrelease/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
            </CardButton>
            {isText && <CardHeading>{editedCardHeading}</CardHeading>}
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyNewReleaseCard
