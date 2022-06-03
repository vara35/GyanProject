import React from 'react'

interface Props {
   width: number
   height: number
}

const BaseCheckBoxNormalIcon = (props: Props) => (
   <svg width={props.width} height={props.height}>
      <defs>
         <path id='default_check_svg__a' d='M0 0h20v20H0z' />
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(-2 -2)'>
         <mask id='default_check_svg__b' fill='#fff'>
            <use xlinkHref='#default_check_svg__a' />
         </mask>
         <rect
            width={15}
            height={15}
            x={2.5}
            y={2.5}
            fill='#F5F6FF'
            stroke='#C4CDD5'
            mask='url(#default_check_svg__b)'
            rx={3}
         />
      </g>
   </svg>
)

BaseCheckBoxNormalIcon.defaultProps = {
   width: 16,
   height: 16
}
export default BaseCheckBoxNormalIcon
