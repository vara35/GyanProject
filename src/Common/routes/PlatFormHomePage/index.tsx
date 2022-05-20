import ArticleComponent from '../../components/AllDomainsFirstComponent'
import CommentsComponents from '../../components/AllDomainsSecondPage'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../AllDomainsPage/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const PlatFormHomePage = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <ArticleComponent />
               <CommentsComponents />
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default PlatFormHomePage
