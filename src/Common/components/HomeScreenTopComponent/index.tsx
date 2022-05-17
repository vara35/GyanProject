import UxAndUiComponent from '../UxAndUiComponent'
import ImageBasedComponents from '../ImageBasedComponents'
import HrLine from '../HorizontalLine'

import { GetTagInRow } from '../WritePostScreen/syledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import { CommentsNumber } from '../HeartAndComments/styledComponents'

import {
   HomeScreenMainContainer,
   ProvideSpaceBetween,
   CommonContainer,
   DomainExpert,
   TopComponentTextEle,
   ButtonInTopComponent,
   ButtonContainer,
   ProvideFlex
} from './styledComponents'

const TopComponentURl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698922/XS_3x_l19lie.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652700232/No.Persons_3x_eemqjd.png',
   url3:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652700270/No.Posts_3x_qh4zbc.png',
   url4:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652700315/No.Persons_give_star_3x_unlf1l.png',
   buttonText: 'Leave',
   domainText: 'Domain EXPERTS',
   topComponentTxt: `UX designers take it as dogma that UIs should be simple, but what does that really mean? Robert Hoekman Jr. challengesour preconceptions of “simple,” and dissects what is the true attractive element in these rather complex interfaces.`
}

const numbers = [204, '999+', 654]

const TopComponent = () => (
   <HomeScreenMainContainer>
      <ProvideSpaceBetween>
         <UxAndUiComponent />
         <CommonContainer>
            <DomainExpert>{TopComponentURl.domainText}</DomainExpert>
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
         <TopComponentTextEle>
            {TopComponentURl.topComponentTxt}
         </TopComponentTextEle>
         <ButtonContainer>
            <ButtonInTopComponent
               bgColor='rgba(255, 11, 55, 0.05)'
               color='#ff0b37'
            >
               {TopComponentURl.buttonText}
            </ButtonInTopComponent>
         </ButtonContainer>
      </HeadingAndTagsContainer>
      <ProvideFlex>
         <ProvideFlex>
            <ImageBasedComponents
               height='16px'
               color='#ffbbd3'
               fontSize='15.9px'
               imageUrl={TopComponentURl.url2}
            />
            <CommentsNumber color='#ffb800' margin='33px'>
               {numbers[0]}
            </CommentsNumber>
         </ProvideFlex>
         <ProvideFlex>
            <ImageBasedComponents
               height='16px'
               color='#2dca73'
               fontSize='15.9px'
               imageUrl={TopComponentURl.url3}
            />
            <CommentsNumber color='#2dca73' margin='33px'>
               {numbers[1]}
            </CommentsNumber>
         </ProvideFlex>
         <ProvideFlex>
            <ImageBasedComponents
               height='16px'
               color='#6b38fb'
               fontSize='15.9px'
               imageUrl={TopComponentURl.url4}
            />
            <CommentsNumber color='#6b38fb' margin='33px'>
               {numbers[2]}
            </CommentsNumber>
         </ProvideFlex>
      </ProvideFlex>
      <HrLine />
   </HomeScreenMainContainer>
)

export default TopComponent
