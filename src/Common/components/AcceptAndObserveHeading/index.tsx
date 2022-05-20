import { AcceptHeading } from './styledComponents'

interface AcceptAndObserveHeadingProps {
   text: string
}

const AcceptAndObserveHeading = (props: AcceptAndObserveHeadingProps) => {
   const { text } = props
   return <AcceptHeading text={text}>{text}</AcceptHeading>
}
export default AcceptAndObserveHeading
