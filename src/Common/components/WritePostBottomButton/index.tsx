import { Button, MainContainer } from './styledComponents'

interface WritePostButtonProps {
   names: string[]
   bgColor?: boolean
}

const WritePostButton = (props: WritePostButtonProps) => {
   const { names, bgColor } = props

   return (
      <MainContainer>
         <Button bgColor={bgColor}>{names[0]}</Button>
         <Button bgColor={bgColor}>{names[1]}</Button>
         <Button bgColor={bgColor}>{names[2]}</Button>
      </MainContainer>
   )
}

export default WritePostButton
