import { DomainNameList, ListDescription } from './styledComponents'

interface FollowingDomainsProps {
   name: string
}

const FollowingDomains = (props: FollowingDomainsProps) => {
   const { name } = props
   return (
      <DomainNameList>
         <ListDescription>{name}</ListDescription>
      </DomainNameList>
   )
}

export default FollowingDomains
