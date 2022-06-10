import { Link } from 'react-router-dom'

import {
   CardButton,
   CardImage,
   SpotifyCardMainContainer
} from '../SpotifyCategoryCard/styledComponents'
import { GenreHeadingEle, GenrePlayList } from './styledComponents'

interface GenresCardProps {
   genreObj: {
      genreImage: string
      name: string
      total: number | string
      id: string | undefined
   }
}

const SpotifyGenresCard = (props: GenresCardProps) => {
   const { genreObj } = props
   const { genreImage, name, total, id } = genreObj

   const editedHeading =
      name !== undefined && name !== null && name.slice(0, 16)

   return (
      <Link to={`/editor/${id}`}>
         <SpotifyCardMainContainer>
            <CardButton type='button'>
               <CardImage src={genreImage} />
               <GenreHeadingEle>{editedHeading}</GenreHeadingEle>
               <GenrePlayList>{`${total} Tracks`} </GenrePlayList>
            </CardButton>
         </SpotifyCardMainContainer>
      </Link>
   )
}

export default SpotifyGenresCard
