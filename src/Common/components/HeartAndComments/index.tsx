import {
   HeartAndCommentsContainer,
   HeartIcon,
   CommentsNumber
} from './styledComponents'

interface HeartAndCommentsProps {
   heartImage: string
}

const number = 12

const HeartAndComments = (props: HeartAndCommentsProps) => {
   const { heartImage } = props
   return (
      <HeartAndCommentsContainer>
         <HeartIcon src={heartImage} />
         <CommentsNumber>{number}</CommentsNumber>
      </HeartAndCommentsContainer>
   )
}
export default HeartAndComments
