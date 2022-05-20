import WritePostButton from '../WritePostBottomButton'

import CreatePageButtonText from '../CreatePageButtonText'
import {
   CommonContainer,
   ProvideFlex
} from '../HomeScreenTopComponent/styledComponents'
import {
   Heading,
   WritePostMainContainer
} from '../WritePostScreen/syledComponents'
import {
   FirstMenu,
   SecondMenu,
   TopicDescriptionInCreatePage,
   ThirdContainer,
   SearchBar,
   RecomdedEle
} from './styledComponents'

const names: Array<string> = [
   'Review',
   'Save Draft',
   'Request to Domain Expert'
]

const PlainScrenConstaints = {
   title: 'Title',
   description: '5 Tags, Comma seperated, No spaces or any spcial character',
   subtitle: 'Topic Description'
}

const recomendText = 'Recommended'

const CreatePageComponent = () => (
   <WritePostMainContainer>
      <Heading>{PlainScrenConstaints.title}</Heading>
      <TopicDescriptionInCreatePage>
         {PlainScrenConstaints.subtitle}
      </TopicDescriptionInCreatePage>
      <ProvideFlex>
         <CommonContainer>
            <FirstMenu></FirstMenu>
            <SecondMenu>
               <SearchBar type='search' placeholder='Search' />
               <RecomdedEle>{recomendText}</RecomdedEle>
               <CreatePageButtonText boxField='3D Animation' />
               <CreatePageButtonText boxField='Jabong' />
               <CreatePageButtonText boxField='Artificial Intelligence.' />
            </SecondMenu>
         </CommonContainer>
         <ThirdContainer>Ok</ThirdContainer>
      </ProvideFlex>
      <WritePostButton names={names} bgColor={true} />
   </WritePostMainContainer>
)

export default CreatePageComponent
