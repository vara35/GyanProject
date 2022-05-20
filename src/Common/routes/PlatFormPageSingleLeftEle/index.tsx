import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import PlatFormBottomComponent from '../../components/PlatFormBottomComponent'
import PlatFormReviewSecondPage from '../../components/PlatFormReviewSecondPage'

const PlatFormPageSingleEle = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <ProvideFlexRow>
               <CommonContainer>
                  <PlatFormReviewFirstPage isShow={false} />
                  <PlatFormBottomComponent isShow={false} />
               </CommonContainer>
            </ProvideFlexRow>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PlatFormPageSingleEle
