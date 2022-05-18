import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'

import { PlatFormReviewPageContainer } from '../PlatFormReviewPage/styledComponents'

const PostScreen = () => (
   <PlatFormReviewPageContainer>
      <PlatFormReviewFirstPage isShow={true} />
      <PlatFormReviewSecondPage isShow={true} />
   </PlatFormReviewPageContainer>
)
export default PostScreen
