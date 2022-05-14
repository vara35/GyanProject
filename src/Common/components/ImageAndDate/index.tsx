import {
   Logo,
   NameAndDateContainer,
   Heading,
   Date,
   HeadingAndDateContainer
} from './styledComponents'

const DateText = '• 06/20/2019 at 6:43 PM'

interface ImageAndDateProps {
   Url: string
   Name: string
   isHorizontal?: boolean
}

const ImageAndDate = (props: ImageAndDateProps) => {
   const { Url, Name, isHorizontal } = props
   return (
      <NameAndDateContainer>
         <Logo src={Url} alt='AlterText' />
         <HeadingAndDateContainer isHorizontal={isHorizontal}>
            <Heading>{Name}</Heading>
            <Date> {DateText}</Date>
         </HeadingAndDateContainer>
      </NameAndDateContainer>
   )
}

export default ImageAndDate
