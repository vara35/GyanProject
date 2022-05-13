import ProfilewithEllipse from '../ArticleProfile'
import InputBarComponenent from '../BottomInputBar'
import DescriptionOfComments from '../CommentsDescription'
import Linebreak from '../HorizontalLine'
import { MainContainer } from './styledComponents'
const CommentsComponents = () => (
   <MainContainer>
      <ProfilewithEllipse
         addThreeDots={true}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Ashoka T.'
      />
      <DescriptionOfComments />
      <Linebreak />
      <ProfilewithEllipse
         addThreeDots={false}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Ashoka T.'
      />
      <DescriptionOfComments />
      <ProfilewithEllipse
         addThreeDots={false}
         Url='https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png'
         AlterText='Logo'
         Name='Ashoka T.'
      />
      <DescriptionOfComments />
      <InputBarComponenent />
   </MainContainer>
)

export default CommentsComponents
