import HeartAndComments from '../HeartAndComments'
import ImageBasedComponents from '../ImageBasedComponents'
import Tag from '../ArticleTag'

import { CommentsNumber } from '../HeartAndComments/styledComponents'
import {
   ButtonContainer,
   CommonContainer,
   ProvideFlex,
   ProvideSpaceBetween
} from '../HomeScreenTopComponent/styledComponents'
import { SelectFolderHeading } from '../SelectFolder/styledComponents'
import {
   IconAndCommentsInSecondPage,
   PlatFormReviewSecondPageContainer,
   SecondPageImage,
   TendingTextEle
} from './styledComponents'

const imageUrl =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652865955/image_3x_u7tyks.png'

const PlatFormReviewSecondPageProps = {
   heading: `Dove Fedrick`,
   text1: `dovefedrick132@gmail.com`,
   text2: `Hi, I'm Dove fedrick! I'm a product engineer who isbuilding technology to elevate peopleand is currently focusing on growing the ReactLadies community for React developers.`,
   text3: `Product engineer`,
   heartImageUrl:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699082/Icon_3x_uiqtnb.png',
   folderIcon:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652699131/Icon_3x_tct3fm.png',
   fiveComments: '5 Comments ',
   tendingText: 'TRENDING ON UI/UX DESIGNING',
   heading1: `The Evolution of UI/UX Designers Into 
   Product Designers`,
   doveFobrickUrl:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652789866/Dovefedrick_2_3x_as5uso.png',
   author: 'Author',
   headingText: `Reducing an array is a helpful functional programming technique to use when you need to...`
}

const num = 20

const PlatFormReviewSecondPage = () => (
   <CommonContainer>
      <PlatFormReviewSecondPageContainer
         height='394px'
         width='264px'
         PlatFormReviewSecondPageProps
         marginTop='24px'
      >
         <SecondPageImage src={imageUrl} />
         <SelectFolderHeading color='#000000' fontSize='16px' width='96px'>
            {PlatFormReviewSecondPageProps.heading}
         </SelectFolderHeading>
         <SelectFolderHeading color='#7e858e' fontSize='12px' width='154px'>
            {PlatFormReviewSecondPageProps.text1}
         </SelectFolderHeading>
         <SelectFolderHeading color='#000000' fontSize='14px' width='232px'>
            {PlatFormReviewSecondPageProps.text2}
         </SelectFolderHeading>
         <ProvideSpaceBetween>
            <CommonContainer>*</CommonContainer>
            <SelectFolderHeading color='#0b69ff' fontSize='12px' width='110px'>
               {PlatFormReviewSecondPageProps.text3}
            </SelectFolderHeading>
            <CommentsNumber color='#ff0b37' margin=''>
               {num}
            </CommentsNumber>
         </ProvideSpaceBetween>
      </PlatFormReviewSecondPageContainer>
      <PlatFormReviewSecondPageContainer
         height='92px'
         tendingTextfiveComments
         width='265px'
         marginTop='26px'
      >
         <ProvideSpaceBetween>
            <HeartAndComments
               heartImage={PlatFormReviewSecondPageProps.heartImageUrl}
            />
            <ProvideFlex>
               <ImageBasedComponents
                  imageUrl={PlatFormReviewSecondPageProps.folderIcon}
                  height='16px'
               />
               <SelectFolderHeading
                  color='#0b69ff'
                  fontSize='15px'
                  width='92px'
               >
                  {PlatFormReviewSecondPageProps.fiveComments}
               </SelectFolderHeading>
            </ProvideFlex>
         </ProvideSpaceBetween>
      </PlatFormReviewSecondPageContainer>
      <TendingTextEle>
         {PlatFormReviewSecondPageProps.tendingText}
      </TendingTextEle>
      <PlatFormReviewSecondPageContainer
         height='221px'
         width='264px'
         marginTop='12px'
      >
         <SelectFolderHeading color='#171f46' fontSize='12px' width='208px'>
            {PlatFormReviewSecondPageProps.heading1}
         </SelectFolderHeading>
         <ProvideFlex>
            <ImageBasedComponents
               imageUrl={PlatFormReviewSecondPageProps.doveFobrickUrl}
               height='23px'
            />
            <CommonContainer>
               <SelectFolderHeading color='#7e858e' fontSize='8px' width='56px'>
                  {PlatFormReviewSecondPageProps.author}
               </SelectFolderHeading>
               <SelectFolderHeading color='#171f46' fontSize='8px' width='51px'>
                  {PlatFormReviewSecondPageProps.heading}
               </SelectFolderHeading>
            </CommonContainer>
         </ProvideFlex>
         <SelectFolderHeading color='#7e858e' fontSize='10px' width='232px'>
            {PlatFormReviewSecondPageProps.headingText}
         </SelectFolderHeading>
         <Tag />
         <IconAndCommentsInSecondPage>
            <HeartAndComments
               heartImage={PlatFormReviewSecondPageProps.heartImageUrl}
            />
            <ImageBasedComponents
               imageUrl={PlatFormReviewSecondPageProps.folderIcon}
               height='16px'
            />
            <SelectFolderHeading color='#0b69ff' fontSize='15px' width='12px'>
               {num}
            </SelectFolderHeading>
         </IconAndCommentsInSecondPage>
      </PlatFormReviewSecondPageContainer>

      <PlatFormReviewSecondPageContainer
         height='221px'
         width='264px'
         marginTop='12px'
      >
         <ProvideFlex>
            <ImageBasedComponents
               imageUrl={PlatFormReviewSecondPageProps.doveFobrickUrl}
               height='23px'
            />
            <SelectFolderHeading color='#171f46' fontSize='12px' width='208px'>
               {PlatFormReviewSecondPageProps.heading1}
            </SelectFolderHeading>
         </ProvideFlex>
         <SelectFolderHeading color='#7e858e' fontSize='10px' width='232px'>
            {PlatFormReviewSecondPageProps.headingText}
         </SelectFolderHeading>
         <Tag />
         <IconAndCommentsInSecondPage>
            <HeartAndComments
               heartImage={PlatFormReviewSecondPageProps.heartImageUrl}
            />
            <ImageBasedComponents
               imageUrl={PlatFormReviewSecondPageProps.folderIcon}
               height='16px'
            />
            <SelectFolderHeading color='#0b69ff' fontSize='15px' width='12px'>
               {num}
            </SelectFolderHeading>
         </IconAndCommentsInSecondPage>
      </PlatFormReviewSecondPageContainer>
   </CommonContainer>
)

export default PlatFormReviewSecondPage
