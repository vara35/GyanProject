import {
   HeartAndCommentsContainer,
   HeartIcon,
   CommentsNumber
} from './styledComponents'

interface HeartAndCommentsProps {
   heartImage: string
   color?: string
   margin?: string
}

const number = 12

const HeartAndComments = (props: HeartAndCommentsProps) => {
   const { heartImage, color = '#ff0b37', margin = '5px' } = props
   return (
      <HeartAndCommentsContainer>
         <HeartIcon src={heartImage} />
         <CommentsNumber color={color} margin={margin}>
            {number}
         </CommentsNumber>
      </HeartAndCommentsContainer>
   )
}
export default HeartAndComments
