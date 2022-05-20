import { CommentsNumber } from '../HeartAndComments/styledComponents'
import {
   CommonContainer,
   ProvideSpaceBetween
} from '../HomeScreenTopComponent/styledComponents'
import {
   PlatFormReviewSecondPageContainer,
   SecondPageImage
} from '../PlatFormReviewSecondPage/styledComponents'
import { SelectFolderHeading } from '../SelectFolder/styledComponents'

const PlatFormReviewSecondPageProps = {
   heading: `Dove Fedrick`,
   text1: `dovefedrick132@gmail.com`,
   text2: `Hi, I'm Dove fedrick! I'm a product engineer who isbuilding technology to elevate peopleand is currently focusing on growing the ReactLadies community for React developers.`,
   text3: `Product engineer`
}

const num = 20

const imageUrl =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652865955/image_3x_u7tyks.png'

const AuthorDetails = () => (
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
)

export default AuthorDetails
