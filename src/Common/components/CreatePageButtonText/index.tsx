import { ProvideSpaceBetween } from '../HomeScreenTopComponent/styledComponents'
import { SelectFolderHeading } from '../SelectFolder/styledComponents'

import {
   ButtonInCreatePage,
   ProvideSpaceBetweenInRow
} from './styledComponents'

const buttonText = 'Add'

interface CreatePageButtonTextProps {
   boxField: string
}

const CreatePageButtonText = (props: CreatePageButtonTextProps) => {
   const { boxField } = props
   return (
      <ProvideSpaceBetweenInRow>
         <SelectFolderHeading color='#171f46' fontSize='14px' width='90px'>
            {boxField}
         </SelectFolderHeading>
         <ButtonInCreatePage>{buttonText}</ButtonInCreatePage>
      </ProvideSpaceBetweenInRow>
   )
}

export default CreatePageButtonText
