import PlatFormReview from '../../components/PlatFormReviewSecondPage'
import PostScreen from '../../components/PostScreen'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { PlatFormReviewPageContainer } from '../SecondPlatFormPostPage/styledComponents'

const PostScreenPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <PlatFormReviewPageContainer>
                  <PostScreen />
                  <PlatFormReview isShow={true} />
               </PlatFormReviewPageContainer>
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PostScreenPage
