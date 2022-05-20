import ArticleComponent from '../../components/AllDomainsFirstComponent'
import CommentsComponents from '../../components/AllDomainsSecondPage'
import Header from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'

import { CommonContainer } from '../../components/HomeScreenTopComponent/styledComponents'
import { ProvideFlexRow } from './styledComponents'

const AllDomainsPage = () => (
   <ProvideFlexRow>
      <LeftMenu />
      <CommonContainer>
         <Header />
         <ArticleComponent />
         <CommentsComponents />
      </CommonContainer>
   </ProvideFlexRow>
)

export default AllDomainsPage
