import PlatFormDomainPageComponent from '../../components/PlatFormDomainPageComponent'

import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const PlatFormDomainPage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <PlatFormDomainPageComponent />
         </CommonContainer>
      </ProvideFlexRow>
   </>
)

export default PlatFormDomainPage
