import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { PlatFormReviewPageContainer } from './styledComponents'

const PlatFormReviewPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <PlatFormReviewPageContainer>
                  <PlatFormReviewFirstPage isShow={false} />
                  <PlatFormReviewSecondPage isShow={false} />
               </PlatFormReviewPageContainer>
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PlatFormReviewPage
