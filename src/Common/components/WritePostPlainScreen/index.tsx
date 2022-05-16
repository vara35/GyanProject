import RectangleBox from '../RectangleBoxWithIcons'
import WritePostButton from '../WritePostBottomButton'

import {
   GetTagInRow,
   Heading,
   WritePostMainContainer
} from '../WritePostScreen/syledComponents'
import { TopicDescription, FiveTagsText } from './styledComponents'

const names: Array<string> = [
   'Review',
   'Save Draft',
   'Request to Domain Expert'
]

const PlainScrenConstaints = {
   title: 'Title',
   description: '5 Tags, Comma seperated, No spaces or any spcial character',
   subtitle: 'Topic Description'
}

const WritePostPlainScreenComponents = () => (
   <WritePostMainContainer>
      <Heading>{PlainScrenConstaints.title}</Heading>
      <GetTagInRow>
         <FiveTagsText>{PlainScrenConstaints.description}</FiveTagsText>
         <RectangleBox />
      </GetTagInRow>
      <TopicDescription>{PlainScrenConstaints.subtitle}</TopicDescription>
      <WritePostButton names={names} bgColor={true} />
   </WritePostMainContainer>
)

export default WritePostPlainScreenComponents
