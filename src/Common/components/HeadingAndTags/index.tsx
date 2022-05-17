import Tag from '../ArticleTag'
import IconsAndHeartAndComments from '../IconsAndHeartAndComments'

import {
   WhatIsZeroHeading,
   HeadingAndTagsContainer,
   ImageAndCommentsContainerForalignSelf
} from './styledComponents'

const WhatIsZeroHeadingText =
   'What Is Zero UI? (And Why Is It Crucial to the Future of Design?)'

const HeadingAndTags = () => (
   <HeadingAndTagsContainer>
      <WhatIsZeroHeading>{WhatIsZeroHeadingText}</WhatIsZeroHeading>
      <ImageAndCommentsContainerForalignSelf>
         <Tag />
         <IconsAndHeartAndComments />
      </ImageAndCommentsContainerForalignSelf>
   </HeadingAndTagsContainer>
)

export default HeadingAndTags
