import { WhatIsZeroHeading } from '../ArticleSection/styledComponents'
import ImageBasedComponents from '../ImageBasedComponents'

import { UxAndUiComponentMainContainer, UiText } from './styledComponents'

const DesinerText = 'UI/UX Deigners'

const UxAndUiComponent = () => (
   <UxAndUiComponentMainContainer>
      <ImageBasedComponents height='53px' color='#ffbbd3' fontSize='15.9px' />
      <UiText>{DesinerText}</UiText>
   </UxAndUiComponentMainContainer>
)

export default UxAndUiComponent
