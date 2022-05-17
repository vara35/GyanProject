import Tag from '../ArticleTag'
import RectangleBox from '../RectangleBoxWithIcons'
import WritePostButton from '../WritePostBottomButton'

const text = `'IS SIMPLICITY A real thing? Or is design the pursuit of something else'
'entirely? A Logic 101 professor once explained to the  I was i'
'that a major factorinscreaming matches between people is the lack f a'
'shared definition f a key term. Clean, for example, can be measured'
'in degrees. It can mean verydifferent things to people depending on'
"their standards f cleanliness. Then there'sawordlikeimple.Two"
'people can have very different definitions of a wordlike that.'
'Designers, i particular, most definitely do.When many of them sa'
'simple, they mean to describe something incrediblyeasy to use.'
'Whenothers say it, theyre referencing the relative complexity of a'
"thing, whether it's a problem, a solution, a piece of code, or"
"something else. To thi, I admit that what I'm proposing here"
"may be a semantic debate.But it's an important one, because the word"
'simple also gets used in thepresence ofstakeholders and coworkers who'
"may have no idea what simplicitymeans in the context f a user's"
'experience.'`

import {
   WritePostMainContainer,
   Heading,
   GetTagInRow,
   Content
} from './syledComponents'

const names: Array<string> = ['Review', 'Save Draft', 'Submit']

const EvalutionText = 'The Evolution of UI/UX Designers Into Product Designers'

const WritePostScreenComponent = () => (
   <WritePostMainContainer>
      <Heading>{EvalutionText} </Heading>
      <GetTagInRow>
         <Tag />
         <RectangleBox />
      </GetTagInRow>
      <Content>{text}</Content>
      <WritePostButton names={names} bgColor={false} />
   </WritePostMainContainer>
)

export default WritePostScreenComponent
