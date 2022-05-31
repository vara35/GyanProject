import { Link } from 'react-router-dom'

import {
   CardButton,
   CardImage,
   SpotifyCardMainContainer
} from '../SpotifyCategoryCard/styledComponents'
import { GenreHeadingEle, GenrePlayList } from './styledComponents'

interface GenresCardProps {
   genreObj: any
}

const GenresCard = (props: GenresCardProps) => {
   const { genreObj } = props
   const { genreImage, name, total, id } = genreObj
   return (
      <Link to={`/category/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={genreImage} />
               <GenreHeadingEle>{name}</GenreHeadingEle>
               <GenrePlayList>{`${total} playlist`} </GenrePlayList>
            </CardButton>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default GenresCard
