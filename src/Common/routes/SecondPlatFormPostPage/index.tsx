import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormReview from '../../components/PlatFormReviewSecondPage'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { PlatFormReviewPageContainer } from './styledComponents'

const SecondPlatFormPostPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <PlatFormReviewPageContainer>
                  <PlatFormReviewFirstPage isShow={false} />
                  <PlatFormReview isShow={false} />
               </PlatFormReviewPageContainer>
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default SecondPlatFormPostPage
