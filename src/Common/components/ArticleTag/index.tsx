import { GetTagsInRow } from '../ArticleSection/styledComponents'
import { TagContainer, TagName, TagImage } from './styledComponents'

const ArticleTag = {
   url1:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652431382/tag_3x_lfir1a.png',
   url2:
      'https://res.cloudinary.com/image-link-getter/image/upload/v1652431382/tag_3x_lfir1a.png'
}

const Names = { Name1: 'ui discuss', Name2: 'uisolver' }

interface TagProps {
   marginTop?: string
}

const Tag = (props: TagProps) => {
   const { marginTop = '24px' } = props
   return (
      <GetTagsInRow>
         <TagContainer bgColor='#d7dfe9' marginTop={marginTop}>
            <TagImage src={ArticleTag.url1} alt='Tag' />
            <TagName color='#0b69ff'>{Names.Name1}</TagName>
         </TagContainer>
         <TagContainer bgColor='#f3fff8' marginTop={marginTop}>
            <TagImage src={ArticleTag.url2} alt='Tag' />
            <TagName color='#2dca73'>{Names.Name2}</TagName>
         </TagContainer>
      </GetTagsInRow>
   )
}

export default Tag
