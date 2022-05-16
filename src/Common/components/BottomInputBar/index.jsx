import { InputBarMainContainer, InputBar, SendIcon } from './styledComponents'

const SendIconUrl =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652679220/Icon_Stroke_3x_sfzt9p.png'

const InputBarComponenent = () => (
   <InputBarMainContainer>
      <InputBar type='search' placeholder='Write a comment...' />
      <SendIcon src={SendIconUrl} />
   </InputBarMainContainer>
)

export default InputBarComponenent
