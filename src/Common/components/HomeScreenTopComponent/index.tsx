import { Provider } from 'mobx-react'
import UxAndUiComponent from '../UxAndUiComponent'
import ImageBasedComponents from '../ImageBasedComponents'

import { GetTagInRow } from '../WritePostScreen/syledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import {
   HomeScreenMainContainer,
   ProvideSpaceBetween,
   CommonContainer,
   DomainExpert,
   TopComponentTextEle
} from './styledComponents'

const DomainText = 'Domain EXPERTS'

const TopComponentURl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698922/XS_3x_l19lie.png'
}

const topComponentTxt = `UX designers take it as dogma that UIs should be simple, but what does that really mean? Robert Hoekman Jr. challengesour preconceptions of “simple,” and dissects what is the true attractive element in these rather complex interfaces.`

const TopComponent = () => (
   <HomeScreenMainContainer>
      <ProvideSpaceBetween>
         <UxAndUiComponent />
         <CommonContainer>
            <DomainExpert>{DomainText}</DomainExpert>
            <GetTagInRow>
               <ImageBasedComponents
                  height='32px'
                  color='#ffbbd3'
                  fontSize='15.9px'
                  margin='10px'
               />
               <ImageBasedComponents
                  height='32px'
                  color='#ffbbd3'
                  fontSize='15.9px'
                  imageUrl={TopComponentURl.url1}
               />
               <ImageBasedComponents
                  height='32px'
                  color='#ffbbd3'
                  fontSize='15.9px'
                  margin='10px'
               />
            </GetTagInRow>
         </CommonContainer>
      </ProvideSpaceBetween>
      <HeadingAndTagsContainer>
         <TopComponentTextEle>{topComponentTxt}</TopComponentTextEle>
      </HeadingAndTagsContainer>
   </HomeScreenMainContainer>
)

export default TopComponent
