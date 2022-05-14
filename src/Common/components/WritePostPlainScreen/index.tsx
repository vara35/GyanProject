import RectangleBox from '../RectangleBoxWithIcons'
import { RectangleBoxMainContainer } from '../RectangleBoxWithIcons/styledComponents'
import {
   GetTagInRow,
   Heading,
   WritePostMainContainer
} from '../WritePostScreen/syledComponents'
import { TopicDescription } from './styledComponents'

const WritePostPlainScreenComponents = () => (
   <WritePostMainContainer>
      <Heading>Title</Heading>
      <GetTagInRow>
         <RectangleBoxMainContainer>
            5 Tags, Comma seperated, No spaces or any spcial character{' '}
         </RectangleBoxMainContainer>
         <RectangleBox />
      </GetTagInRow>
      <TopicDescription>Topic Description</TopicDescription>
   </WritePostMainContainer>
)

export default WritePostPlainScreenComponents
