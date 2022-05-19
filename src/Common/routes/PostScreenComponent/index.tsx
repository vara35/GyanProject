import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'
import PostScreen from '../../components/PostScreen'

import { PlatFormReviewPageContainer } from '../PlatFormReviewPage/styledComponents'

const PostScreenComponent = () => (
   <PlatFormReviewPageContainer>
      <PostScreen />
      <PlatFormReviewSecondPage isShow={true} />
   </PlatFormReviewPageContainer>
)
export default PostScreenComponent
