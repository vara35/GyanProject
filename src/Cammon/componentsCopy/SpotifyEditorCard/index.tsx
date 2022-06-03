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

const SpotifyEditorCard = (props: SpotifyCardProps) => {
   const { cardHeading, cardImgUrl, id, isText = true } = props
   return (
      <Link to={`editor/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
            </CardButton>
            {isText && <CardHeading>{cardHeading}</CardHeading>}
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyEditorCard
