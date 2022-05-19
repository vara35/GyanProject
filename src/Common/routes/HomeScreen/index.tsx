import TopComponent from '../../components/HomeScreenTopComponent'
import ArticleComponent from '../../components/ArticleSection'
import CommentsComponents from '../../components/CommentsSection'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { ProvideFlexRow } from '../Home/styledComponents'
import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'

const HomeScreen = () => (
   <>
      <ProvideFlexRow>
         <LeftMenu />
         <CommonContainer>
            <Header />
            <>
               <TopComponent />.
               <ArticleComponent />
               <CommentsComponents />
            </>
         </CommonContainer>
      </ProvideFlexRow>
   </>
)
export default HomeScreen
