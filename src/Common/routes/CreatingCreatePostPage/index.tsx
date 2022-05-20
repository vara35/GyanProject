import CreatePageComponent from '../../components/CreatePageComponent'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const CreatingCreatePostPage = () => (
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

export default CreatingCreatePostPage
