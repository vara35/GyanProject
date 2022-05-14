import { Button, MainContainer } from './styledComponents'

interface WritePostButtonProps {
   names: string[]
}

const WritePostButton = (props: WritePostButtonProps) => {
   const { names } = props

   return (
      <MainContainer>
         <Button>{names[0]}</Button>
         <Button>{names[1]}</Button>
         <Button>{names[2]}</Button>
      </MainContainer>
   )
}

export default WritePostButton
