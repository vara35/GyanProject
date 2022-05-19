import {
   DomainNameList,
   ListDescription,
   SuggestListButton
} from './styledComponents'

interface SuggestDomainsProps {
   suggestItem: {
      Name: string
      category: string
      id: number
   }
}

const SuggestDomains = (props: SuggestDomainsProps) => {
   const { suggestItem } = props
   const { Name, category } = suggestItem
   return (
      <DomainNameList>
         <ListDescription>{Name}</ListDescription>
         <SuggestListButton type='button' category={category}>
            {category}
         </SuggestListButton>
      </DomainNameList>
   )
}

export default SuggestDomains
