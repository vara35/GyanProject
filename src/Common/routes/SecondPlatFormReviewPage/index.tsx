import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import PlatFormBottomComponent from '../../components/PlatFormBottomComponent'
import PlatFormReview from '../../components/PlatFormReviewSecondPage'

const SecondPlatFormReviewPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <ProvideFlexRow>
               <CommonContainer>
                  <PlatFormReviewFirstPage isShow={false} />
                  <PlatFormBottomComponent isShow={true} />
               </CommonContainer>
               <PlatFormReview isShow={false} />
            </ProvideFlexRow>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default SecondPlatFormReviewPage
