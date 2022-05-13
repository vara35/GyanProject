import { TagContainer, TagName, TagImage } from './styledComponents'

interface Tagprops {
   Url: string
   AlterText: string
   Name: string
   addColor: boolean
}

const Tag = (props: Tagprops) => {
   const { Url, AlterText, Name, addColor } = props
   return (
      <TagContainer addColor>
         <TagImage src={Url} alt={AlterText} />
         <TagName>{Name}</TagName>
      </TagContainer>
   )
}

export default Tag
