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
   isShowText?: boolean
   path?: string
}

const SpotifyEditorCard = (props: SpotifyCardProps) => {
   const { cardHeading, cardImgUrl, id, isShowText = true, path } = props
   return (
      <Link to={`${path}/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={cardImgUrl} />
            </CardButton>
            {isShowText && <CardHeading>{cardHeading}</CardHeading>}
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyEditorCard
