import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { observer } from 'mobx-react'
// import 'twin.macro'
// import { Button, LensProvider } from '@ib/nebula-system'

import {
   tailwindContainerCSS,
   TailwindContainer,
   MainContainer
} from './styledComponents'
// @observer
// class Home extends Component {
//    render(): React.ReactElement {
//       return (
//          <div>
//             <h2>Hello</h2>
//             <Link to='/counter'>
//                <p>Counter</p>
//             </Link>
//             <TailwindContainer
//                css={[
//                   tailwindContainerCSS
//                   /* Combine regular css and tailwind styles within backticks */
//                ]}
//             >
//                <div tw='flex flex-col justify-center h-full space-y-5'>
//                   <p className='bg-green-500'>Tailwind Column Item</p>
//                   <p>Tailwind Column Item</p>
//                </div>
//             </TailwindContainer>
//             <LensProvider>
//                <Button variant='positive'>Positive</Button>
//             </LensProvider>
//          </div>
//       )
//    }
// }

// export default Home

type MyProps = {
   // using `interface` is also ok
   message: string
}
type MyState = {
   count: number // like this
}
class Home extends React.Component<MyProps, MyState> {
   state = { count: 0 }
   render() {
      return <MainContainer>Hello</MainContainer>
   }
}

export default Home
