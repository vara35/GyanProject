import ArticleComponent from '../../components/ArticleSection'
import CommentsComponents from '../../components/CommentsSection'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
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
