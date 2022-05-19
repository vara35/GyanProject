import ArticleComponent from '../../components/ArticleSection'
import CommentsComponents from '../../components/CommentsSection'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { ProvideFlexRow } from './styledComponents'

const Home = () => (
   <ProvideFlexRow>
      <LeftMenu />
      <CommonContainer>
         <Header />
         <ArticleComponent />
         <CommentsComponents />
      </CommonContainer>
   </ProvideFlexRow>
)

export default Home
