import { Button, ButtonMainContainer } from './styledComponents'

interface WritePostButtonProps {
   names: string[]
   bgColor?: boolean
   color?: string
}

const WritePostButton = (props: WritePostButtonProps) => {
   const { names, bgColor, color } = props

   return (
      <ButtonMainContainer>
         <Button bgColor={bgColor} color={color}>
            {names[0]}
         </Button>
         <Button bgColor={bgColor}>{names[1]}</Button>
         <Button bgColor={bgColor}>{names[2]}</Button>
      </ButtonMainContainer>
   )
}

export default WritePostButton
