import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormBottomComponent from '../../components/PlatFormBottomComponent'
import AuthorDetails from '../../components/AuthorDetails'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

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
               <AuthorDetails />
            </ProvideFlexRow>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PlatFormPageSingleEle
