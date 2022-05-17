import WritePostButton from '../WritePostBottomButton'

import { TopicDescription } from '../WritePostPlainScreen/styledComponents'
import {
   Heading,
   WritePostMainContainer
} from '../WritePostScreen/syledComponents'

import { FirstMenu } from './styledComponents'

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

const CreatePageComponent = () => (
   <WritePostMainContainer>
      <Heading>{PlainScrenConstaints.title}</Heading>
      <TopicDescription>{PlainScrenConstaints.subtitle}</TopicDescription>
      <FirstMenu>Hello</FirstMenu>
      <WritePostButton names={names} bgColor={true} />
   </WritePostMainContainer>
)

export default CreatePageComponent
