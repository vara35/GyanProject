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
   id: string | number
   isShowText?: boolean
   path?: string
}

const SpotifyHomeCard = (props: SpotifyCardProps) => {
   const { cardHeading, cardImgUrl, id, isShowText = true, path } = props
   const editedCardHeading = cardHeading.slice(0, 16)
   return (
      <Link to={`${path}/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
               {isShowText && <CardHeading>{editedCardHeading}</CardHeading>}
            </CardButton>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyHomeCard
