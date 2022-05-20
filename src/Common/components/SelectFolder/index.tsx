import ImageBasedComponents from '../ImageBasedComponents'

import { ElliseImage } from '../ArticleProfile/styledComponents'
import { CommonContainer } from '../HomeScreenTopComponent/styledComponents'
import {
   SelectFolderMainContainer,
   SelectFolderHeadingForFolder
} from './styledComponents'

const url =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1652858480/Icon_3x_pusrry.png'
const text1 = 'Death Star original maps and blueprint.pdf'
const text2 = 'by Ashoka T.  •  06/20/2019 at 6:43 PM '
const threeDotsImage =
   'https://res.cloudinary.com/image-link-getter/image/upload/v1648359358/Screenshot_2022-03-27_110434_oesthh.png'

const SelectFolder = () => (
   <SelectFolderMainContainer>
      <ImageBasedComponents imageUrl={url} height='30px' />
      <CommonContainer>
         <SelectFolderHeadingForFolder
            color='#171f46'
            fontSize='12px'
            width='396px'
         >
            {text1}
         </SelectFolderHeadingForFolder>
         <SelectFolderHeadingForFolder
            color='#7e858e'
            fontSize='12px'
            width='217px'
         >
            {text2}
         </SelectFolderHeadingForFolder>
      </CommonContainer>
      <ElliseImage src={threeDotsImage} />
   </SelectFolderMainContainer>
)

export default SelectFolder
