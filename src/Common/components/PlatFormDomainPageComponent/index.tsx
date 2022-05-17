import HomeScreenTopComponent from '../HomeScreenTopComponent'
import ImageAndDate from '../ImageAndDate'
import UxAndUiComponent from '../UxAndUiComponent'

import {} from './styledComponents'
import { ProvideSpaceBetween } from '../HomeScreenTopComponent/styledComponents'
import { ArticleComponentMainPage } from '../ArticleSection/styledComponents'

const PlatFormDomainConstants = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
}

const PlatFormDomainPageComponent = () => (
   <>
      <HomeScreenTopComponent />
      <ArticleComponentMainPage>
         <ProvideSpaceBetween>
            <ImageAndDate
               Url={PlatFormDomainConstants.url1}
               Name='Ashoka T. '
            />
            <UxAndUiComponent
               height='48px'
               color='#0b69ff'
               fontSize='18px'
               uiText='14px'
               marginRight='0px'
            />
         </ProvideSpaceBetween>
      </ArticleComponentMainPage>
   </>
)

export default PlatFormDomainPageComponent
