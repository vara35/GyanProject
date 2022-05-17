import tw from 'twin.macro'
import styled from 'styled-components'

export const PlatFormText = styled.p`
   ${tw`font-sans text-base font-medium font-sans`}
   width: 976px;
  height: 72px;
  margin: 4px 23px 28px 8px;
  line-height: 1.33;
  color: #171f46;
}
`

export const ProvideSpaceBetweenForPlatFormPage = styled.div`
   ${tw`flex flex-row justify-between h-16`}
}
`
