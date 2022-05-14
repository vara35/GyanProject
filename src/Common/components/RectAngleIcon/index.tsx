import { IconStyle } from './styledComponents'

interface RectangleProps {
   link: string
}

const RectangleIcon = (props: RectangleProps) => {
   const { link } = props
   return <IconStyle src={link} />
}

export default RectangleIcon
