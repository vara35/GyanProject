import WritePostScreenComponent from '../../components/WritePostScreen'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const WritePostScreen = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <WritePostScreenComponent />
         </CommonContainer>
      </ProvideFlexRow>
   </>
)

export default WritePostScreen
