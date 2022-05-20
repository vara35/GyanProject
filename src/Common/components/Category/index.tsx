import { CategoryContainer, CategoryName } from './styledComponents'

interface CategoryProps {
   tag1?: string
   tag2?: string
}

const Category = (props: CategoryProps) => {
   const { tag1, tag2 } = props

   return (
      <CategoryContainer>
         {tag1 && <CategoryName>{tag1}</CategoryName>}
         {tag2 && <CategoryName addColor>{tag2}</CategoryName>}
      </CategoryContainer>
   )
}

export default Category
