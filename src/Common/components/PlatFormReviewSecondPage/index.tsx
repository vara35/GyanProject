import HeartAndComments from '../HeartAndComments'
import ImageBasedComponents from '../ImageBasedComponents'
import Tag from '../ArticleTag'
import AuthorDetails from '../AuthorDetails'

import {
   CommonContainer,
   ProvideFlex
} from '../HomeScreenTopComponent/styledComponents'
import { SelectFolderHeading } from '../SelectFolder/styledComponents'
import {
   IconAndCommentsInSecondPage,
   PlatFormReviewSecondPageContainer,
   ProvideFlexForIcons,
   TendingTextEle
} from './styledComponents'

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
   headingText: `Reducing an array is a helpful functional programming technique to use when you need to...`,
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698879/XS_3x_oslru1.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698922/XS_3x_l19lie.png'
}

const num = 20

interface PlatFormReviewSecondPageProps {
   isShow: boolean
}

const PlatFormReview = (props: PlatFormReviewSecondPageProps) => {
   const { isShow } = props
   const isHeight = isShow ? '127px' : '92px'
   const marginTop = isShow ? '88px' : '27px'

   return (
      <CommonContainer>
         <AuthorDetails />
         <PlatFormReviewSecondPageContainer
            height={isHeight}
            width='265px'
            marginTop={marginTop}
         >
            <ProvideFlexForIcons isShow={isShow}>
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

               {isShow && (
                  <ProvideFlex>
                     <ImageBasedComponents
                        imageUrl={PlatFormReviewSecondPageProps.url1}
                        height='15px'
                     />
                     <ImageBasedComponents height='15px' color='#ffffff' />
                     <ImageBasedComponents
                        imageUrl={PlatFormReviewSecondPageProps.url2}
                        height='15px'
                     />
                  </ProvideFlex>
               )}
            </ProvideFlexForIcons>
         </PlatFormReviewSecondPageContainer>
         <TendingTextEle>
            {PlatFormReviewSecondPageProps.tendingText}
         </TendingTextEle>
         <PlatFormReviewSecondPageContainer
            height='235px'
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
                  <SelectFolderHeading
                     color='#7e858e'
                     fontSize='8px'
                     width='56px'
                  >
                     {PlatFormReviewSecondPageProps.author}
                  </SelectFolderHeading>
                  <SelectFolderHeading
                     color='#171f46'
                     fontSize='8px'
                     width='51px'
                  >
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
               <SelectFolderHeading
                  color='#0b69ff'
                  fontSize='15px'
                  width='12px'
               >
                  {num}
               </SelectFolderHeading>
            </IconAndCommentsInSecondPage>
         </PlatFormReviewSecondPageContainer>

         <PlatFormReviewSecondPageContainer
            height='210px'
            width='264px'
            marginTop='12px'
         >
            <ProvideFlex>
               <ImageBasedComponents
                  imageUrl={PlatFormReviewSecondPageProps.doveFobrickUrl}
                  height='23px'
               />
               <SelectFolderHeading
                  color='#171f46'
                  fontSize='12px'
                  width='208px'
               >
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
               <SelectFolderHeading
                  color='#0b69ff'
                  fontSize='15px'
                  width='12px'
               >
                  {num}
               </SelectFolderHeading>
            </IconAndCommentsInSecondPage>
         </PlatFormReviewSecondPageContainer>
      </CommonContainer>
   )
}

export default PlatFormReview
