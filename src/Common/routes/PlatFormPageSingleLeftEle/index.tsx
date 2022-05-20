import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import PlatFormReviewFirstPage from '../../components/PlatFormReviewFirstPage'
import PlatFormBottomComponent from '../../components/PlatFormBottomComponent'
import AuthorDetails from '../../components/AuthorDetails'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { ButtonElement } from './styledComponents'

const acceptText = 'Accept'

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
               <CommonContainer>
                  <AuthorDetails />
                  <ButtonElement
                     marginTop='48px'
                     background='#0b69ff'
                     color='#ffffff'
                  >
                     {acceptText}
                  </ButtonElement>
                  <ButtonElement
                     marginTop='0px'
                     background='rgba(255, 11, 55, 0.05)'
                     color='#ff0b37'
                  >
                     {acceptText}
                  </ButtonElement>
               </CommonContainer>
            </ProvideFlexRow>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PlatFormPageSingleEle
