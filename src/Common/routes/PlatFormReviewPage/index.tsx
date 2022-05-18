import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'

import { PlatFormReviewPageContainer } from './styledComponents'

const PlatFormReviewPage = () => (
   <PlatFormReviewPageContainer>
      <PlatFormReviewFirstPage isShow={false} />
      <PlatFormReviewSecondPage isShow={false} />
   </PlatFormReviewPageContainer>
)
export default PlatFormReviewPage
