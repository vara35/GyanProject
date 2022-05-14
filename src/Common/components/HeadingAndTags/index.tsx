import Tag from '../ArticleTag'

import { WhatIsZeroHeading, HeadingAndTagsContainer } from './styledComponents'

const WhatIsZeroHeadingText =
   'What Is Zero UI? (And Why Is It Crucial to the Future of Design?)'

const HeadingAndTags = () => (
   <HeadingAndTagsContainer>
      <WhatIsZeroHeading>{WhatIsZeroHeadingText}</WhatIsZeroHeading>
      <Tag />
   </HeadingAndTagsContainer>
)

export default HeadingAndTags
