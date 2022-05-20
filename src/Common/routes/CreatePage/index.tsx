import CreatePageComponent from '../../components/CreatePageComponent'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const CreatePage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <CreatePageComponent />
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)

export default CreatePage
