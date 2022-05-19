import Tag from '../ArticleTag'
import SelectFolder from '../SelectFolder'
import InputBarComponenent from '../BottomInputBar'
import ProfileWithHeartIcon from '../ProfileWithHeartIcon'

import { SecondContent, SeeAllNames } from '../ArticleSection/styledComponents'
import { HeadingAndTagsContainer } from '../HeadingAndTags/styledComponents'

import { ElliseImage } from '../ArticleProfile/styledComponents'
import {
   ButtonContainer,
   ProvideFlex,
   ProvideSpaceBetween
} from '../HomeScreenTopComponent/styledComponents'
import { Date } from '../ImageAndDate/styledComponents'

import { SelectFolderHeading } from '../SelectFolder/styledComponents'
import ImageBasedComponents from '../ImageBasedComponents'
import HrLine from '../HorizontalLine'
import {
   PlatFormReviewFirstPageContanier,
   BackTextEle,
   PlatFormFirstPageText,
   PlatFormText,
   PlatFormImage,
   ImageBottomTextEle,
   PlatFormMiddleContainer,
   ButtonInReviewPage,
   ReminderContainer,
   HrLineInPatFormPage
} from './styledComponents'

const PlatFormReviewFirstPageConstants = {
   threeDotsImage:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1648359358/Screenshot_2022-03-27_110434_oesthh.png',
   backToHomepageText: 'Back to Homepage',
   headingText: 'The Evolution of UI/UX Designers Into Product Designers',
   dateText: '• 06/20/2019 at 6:43 PM',
   text1: `Zero UI is a style that’s been looming in the shadow for some time, but is just now emerging. The idea is easy to understand — the less the user has to think about the interface, the better and more natural it feels. John Brownlee explains the specifics,and how this style is changing everything. `,
   text2: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.`,
   text3: `Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet nullam quis risus eget urna mollis ornare vec id elit non mi porta gravida at eget metus sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.`,
   text4: `UX designers take it as dogma that UIs should be simple, but what does that really mean? Robert Hoekman Jr. challengesour preconceptions of “simple,” and dissects what is the true attractive element in these rather complex interfaces.`,
   text5: `IS SIMPLICITY A real thing? Or is design the pursuit of something else entirely? A Logic 101 professor once explained to the class I was in that a major factorin screaming matches between people is the lack of a shared definition of a key term. "Clean," for example, can be measured in degrees. It can mean very different things to people depending on their standards of cleanliness. Then there'sawordlike"simple.
   "Two people can have very different definitions of a wordlike that. Designers, in particular, most definitely do.When many of them say "simple," they mean to describe something incrediblyeasy to use. Whenothers say it, they're referencing the relative complexity of a thing, whether it's a problem, a solution, a piece of code, or something else. To this extent, I admit that what I'm proposing here may be a semantic debate.
   But it's an important one, because the word "simple" also gets used in thepresence of stakeholders and coworkers who may have no idea what simplicitymeans in the context of a user's experience. `,
   platFormMainImageUrl:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652854893/Evalution_of_Ui_Pic_1_3x_ebemeo.jpg',
   bottomText: 'Credit: Cliff Hawkins/Getty Images',
   importentText: 'Important information',
   importantDescri: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridionec sed odio dui sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis.`,
   buttonText: 'Save'
}

const url = 'https://en.m.wikipedia.org/wiki/Observer_pattern'
const authorName = 'Author'
const authoroName1 = 'Dove Fedrick'

const devFabrickUrl =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652789866/Dovefedrick_2_3x_as5uso.png'

const reminderUrl = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652874707/Inbox_3x_h95jfl.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652874699/Close_-_16px_xtohhz.svg'
}

const reminderText = 'The updating articale along with updated feature'

const ProfilewithEllipseImage = {
   url:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
}

const HeartsCountNumber = 4

const SecondContentText = `I’m usually optimistic about it. And these difficult times just
   helped me reinforce that! I’m not sure if it’s the same for all the
   tech companies, but it seems to me that tech companies were little
   affected by all this.`

const seeAllText = 'See all comments'

const dateAndContent = () => (
   <>
      <Date>{PlatFormReviewFirstPageConstants.dateText}</Date>
      <Tag marginTop='2px' />
      <PlatFormText marginRight='10px' marginLeft='14px' color='#171f46'>
         {PlatFormReviewFirstPageConstants.text1}
      </PlatFormText>
   </>
)

const showAuthor = () => (
   <>
      <SelectFolderHeading color='#7e858e' fontSize='12px' width='56px'>
         {authorName}
      </SelectFolderHeading>
      <ProvideFlex>
         <ImageBasedComponents imageUrl={devFabrickUrl} height='32px' />
         <SelectFolderHeading color='#7e858e' fontSize='14px' width='83px'>
            {authoroName1}
         </SelectFolderHeading>
      </ProvideFlex>
   </>
)

interface PlatFormReviewFirstPageProps {
   isShow: boolean
   width?: string
   height?: string
}

const PlatFormReviewFirstPage = (props: PlatFormReviewFirstPageProps) => {
   const { isShow, width = '768px', height = '1651px' } = props
   return (
      <PlatFormReviewFirstPageContanier width={width} height={height}>
         {isShow && (
            <ReminderContainer>
               <ProvideSpaceBetween>
                  <ImageBasedComponents
                     imageUrl={reminderUrl.url1}
                     height='24px'
                  />
                  <SelectFolderHeading
                     color='#ffb800'
                     fontSize='16px'
                     width='424px'
                  >
                     {reminderText}
                  </SelectFolderHeading>
                  <ImageBasedComponents
                     imageUrl={reminderUrl.url2}
                     height='16px'
                  />
               </ProvideSpaceBetween>
            </ReminderContainer>
         )}
         <ProvideSpaceBetween>
            <BackTextEle>
               {PlatFormReviewFirstPageConstants.backToHomepageText}
            </BackTextEle>
            <ElliseImage
               src={PlatFormReviewFirstPageConstants.threeDotsImage}
            />
         </ProvideSpaceBetween>
         <PlatFormFirstPageText>
            {PlatFormReviewFirstPageConstants.headingText}
         </PlatFormFirstPageText>
         {isShow ? showAuthor() : dateAndContent()}
         <PlatFormImage
            src={PlatFormReviewFirstPageConstants.platFormMainImageUrl}
         />
         {!isShow && (
            <ImageBottomTextEle color='#b5b7c4' fontSize='14px' width='220px'>
               {PlatFormReviewFirstPageConstants.bottomText}
            </ImageBottomTextEle>
         )}
         <PlatFormText marginRight='10px' marginLeft='14px' color='#171f46'>
            {PlatFormReviewFirstPageConstants.text2}
         </PlatFormText>
         <PlatFormMiddleContainer>
            <ImageBottomTextEle color='#000000' fontSize='16px' width='317px'>
               {PlatFormReviewFirstPageConstants.importentText}
            </ImageBottomTextEle>
            <ImageBottomTextEle color='' fontSize='14px' width='622px'>
               {PlatFormReviewFirstPageConstants.importantDescri}
            </ImageBottomTextEle>
         </PlatFormMiddleContainer>
         <PlatFormText marginRight='16px' marginLeft='16px' color='#171f46'>
            {PlatFormReviewFirstPageConstants.text3}
         </PlatFormText>
         {isShow && (
            <ImageBottomTextEle
               color='#b5b7c4'
               fontSize='14px'
               width='220px'
               marginTop='41px'
               marginBottom='39px'
            >
               {PlatFormReviewFirstPageConstants.bottomText}
            </ImageBottomTextEle>
         )}
         <PlatFormText marginRight='16px' marginLeft='16px' color='#171f46'>
            {PlatFormReviewFirstPageConstants.text4}
         </PlatFormText>
         <PlatFormText marginRight='16px' marginLeft='16px' color='#171f46'>
            {PlatFormReviewFirstPageConstants.text5}
         </PlatFormText>
         <SelectFolder />
         <SelectFolderHeading color='#0b69ff' fontSize='15px' width='363px'>
            {url}
         </SelectFolderHeading>
         {!isShow && (
            <ButtonContainer>
               <ButtonInReviewPage>
                  {PlatFormReviewFirstPageConstants.buttonText}
               </ButtonInReviewPage>
            </ButtonContainer>
         )}

         {isShow && (
            <>
               <HrLineInPatFormPage />
               <HeadingAndTagsContainer>
                  <ProfileWithHeartIcon
                     Url={ProfilewithEllipseImage.url}
                     Name='Ashoka T.'
                     isHorizontal={true}
                     HeartsCountNumber={HeartsCountNumber}
                  />
                  <HeadingAndTagsContainer>
                     <SecondContent>{SecondContentText}</SecondContent>
                     <SeeAllNames>{seeAllText}</SeeAllNames>
                     <InputBarComponenent />
                  </HeadingAndTagsContainer>
               </HeadingAndTagsContainer>
            </>
         )}
      </PlatFormReviewFirstPageContanier>
   )
}
export default PlatFormReviewFirstPage
