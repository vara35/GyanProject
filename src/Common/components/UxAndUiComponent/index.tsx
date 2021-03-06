import ImageBasedComponents from '../ImageBasedComponents'

import { UxAndUiComponentMainContainer, UiText } from './styledComponents'

const DesinerText = 'UI/UX Deigners'

interface UxAndUiComponentProps {
   height?: string
   color?: string
   fontSize?: string
   uiText1?: string
   marginRight?: string
   marginLeft?: string
}

const UxAndUiComponent = (props: UxAndUiComponentProps) => {
   const {
      height = '53px',
      color = '#ffbbd3',
      fontSize = '15.9px',
      uiText1 = '24px',
      marginRight = '710px',
      marginLeft = '16px'
   } = props

   return (
      <UxAndUiComponentMainContainer>
         <ImageBasedComponents
            height={height}
            color={color}
            fontSize={fontSize}
         />
         <UiText
            uiText1={uiText1}
            marginRight={marginRight}
            marginLeft={marginLeft}
         >
            {DesinerText}
         </UiText>
      </UxAndUiComponentMainContainer>
   )
}
export default UxAndUiComponent
