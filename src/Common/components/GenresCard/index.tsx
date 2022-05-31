import { Link } from 'react-router-dom'

import {
   CardButton,
   CardImage,
   SpotifyCardMainContainer
} from '../SpotifyCategoryCard/styledComponents'
import { GenreHeadingEle } from './styledComponents'

interface GenresCardProps {
   GenreHeading: string
   gentePlayListCount: string
   genreImgUrl: string
   id: number | string
}

const GenresCard = (props: GenresCardProps) => {
   const { GenreHeading, gentePlayListCount, genreImgUrl, id } = props
   return (
      <Link to={`/category/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={genreImgUrl} />
               <GenreHeadingEle>Hello</GenreHeadingEle>
            </CardButton>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default GenresCard
