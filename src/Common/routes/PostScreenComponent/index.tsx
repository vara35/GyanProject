import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'
import PostScreen from '../../components/PostScreen'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { PlatFormReviewPageContainer } from '../PlatFormReviewPage/styledComponents'

const PostScreenComponent = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <PlatFormReviewPageContainer>
                  <PostScreen />
                  <PlatFormReviewSecondPage isShow={true} />
               </PlatFormReviewPageContainer>
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PostScreenComponent
