import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import PlatFormBottomComponent from '../../components/PlatFormBottomComponent'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'

const SecondPlatFormReviewPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <ProvideFlexRow>
               <CommonContainer>
                  <PlatFormReviewFirstPage isShow={false} />
                  <PlatFormBottomComponent />
               </CommonContainer>
               <PlatFormReviewSecondPage isShow={false} />
            </ProvideFlexRow>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default SecondPlatFormReviewPage
