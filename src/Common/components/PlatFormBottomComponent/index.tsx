import CorrectLogoAndApproveText from '../CorrectLogoAndApproveText'
import ImageAndDate from '../ImageAndDate'

import {
   BottomContainer,
   SeeAllNames
} from '../ArticleSection/styledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'
import HeartAndComments from '../HeartAndComments'
import {
   ButtonContainer,
   ProvideFlex
} from '../HomeScreenTopComponent/styledComponents'
import ImageBasedComponents from '../ImageBasedComponents'
import { SelectFolderHeading } from '../SelectFolder/styledComponents'
import InputBarComponenent from '../BottomInputBar'
import {
   FirstUserContainer,
   ImageContainer,
   PlatFormBottomMainContainer,
   PlatFormBottomText
} from './styledComponents'

const PlatFormBottomComponentProps = {
   seeAllText: 'See All Names',
   user1Url:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652698879/XS_3x_oslru1.png',
   text1:
      'When Pulls Rays Super Bowl, viverra dui but ridionec but competition is set at the main policies. However, it is set at the main policies.',
   text2: 'specify the location of your article and your PDF folder',
   text3:
      'IS SIMPLICITY A real thing? Or is design the pursuit of something else entirely? A Logic 101 professor once explained to the class I was in that a major factorin screaming matches between people is the lack of a shared definition of a key term. '
}

const heartImage =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652699082/Icon_3x_uiqtnb.png'

const folder =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652699131/Icon_3x_tct3fm.png'

const PlatFormBottomComponent = () => (
   <PlatFormBottomMainContainer>
      <SeeAllNames>{PlatFormBottomComponentProps.seeAllText}</SeeAllNames>
      <FirstUserContainer>
         <ImageAndDate
            Url={PlatFormBottomComponentProps.user1Url}
            Name='Ashoka.T'
            isHorizontal={true}
         />
         <HeadingAndTagsContainer>
            <PlatFormBottomText>
               {PlatFormBottomComponentProps.text1}
            </PlatFormBottomText>
            <ProvideFlex>
               <CorrectLogoAndApproveText />
               <ProvideFlex>
                  <HeartAndComments heartImage={heartImage} />
                  <ImageBasedComponents height='16px' imageUrl={folder} />
               </ProvideFlex>
            </ProvideFlex>
         </HeadingAndTagsContainer>
         <HeadingAndTagsContainer>
            <SeeAllNames>{PlatFormBottomComponentProps.seeAllText}</SeeAllNames>
         </HeadingAndTagsContainer>
      </FirstUserContainer>
      <ImageAndDate
         Url={PlatFormBottomComponentProps.user1Url}
         Name='Ashoka.T'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <SelectFolderHeading>
            {PlatFormBottomComponentProps.text2}
         </SelectFolderHeading>
         <ImageContainer>
            <ImageAndDate
               Url={PlatFormBottomComponentProps.user1Url}
               Name='Ashoka.T'
               isHorizontal={true}
            />
            <HeadingAndTagsContainer>
               <SelectFolderHeading>
                  {PlatFormBottomComponentProps.text2}
               </SelectFolderHeading>
               <SeeAllNames>
                  {PlatFormBottomComponentProps.seeAllText}
               </SeeAllNames>
            </HeadingAndTagsContainer>
         </ImageContainer>
      </HeadingAndTagsContainer>
      <ImageAndDate
         Url={PlatFormBottomComponentProps.user1Url}
         Name='Ashoka.T'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <PlatFormBottomText>
            {PlatFormBottomComponentProps.text3}
         </PlatFormBottomText>
      </HeadingAndTagsContainer>
      <ButtonContainer>
         <HeartAndComments heartImage={heartImage} />
         <ImageBasedComponents height='16px' imageUrl={folder} />
      </ButtonContainer>
      <ImageAndDate
         Url={PlatFormBottomComponentProps.user1Url}
         Name='Ashoka.T'
         isHorizontal={true}
      />
      <HeadingAndTagsContainer>
         <PlatFormBottomText>
            {PlatFormBottomComponentProps.text3}
         </PlatFormBottomText>
      </HeadingAndTagsContainer>
      <InputBarComponenent />
   </PlatFormBottomMainContainer>
)

export default PlatFormBottomComponent
