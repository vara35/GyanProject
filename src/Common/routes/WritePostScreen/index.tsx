import WritePostPlainScreenComponents from '../../components/WritePostPlainScreen'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const WritePostScreen = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <WritePostPlainScreenComponents />
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default WritePostScreen
