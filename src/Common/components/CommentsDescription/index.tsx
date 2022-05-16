import { Content } from './styledComponents'

interface DescriptionOfCommentsProps {
   ContentText: string
}

const DescriptionOfComments = (props: DescriptionOfCommentsProps) => {
   const { ContentText } = props
   return <Content>{ContentText}</Content>
}

export default DescriptionOfComments
