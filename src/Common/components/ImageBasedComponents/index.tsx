import { ImageBasedIcon, ImageBasedContainer } from './styledComponents'

interface ImageBasedComponentsProps {
   imageUrl?: string
   height: string
   color?: string
   margin?: string
}

const ImageBasedComponents = (props: ImageBasedComponentsProps) => {
   const { imageUrl, height, color, margin } = props
   return (
      <>
         {imageUrl && (
            <ImageBasedIcon src={imageUrl} height={height} margin={margin} />
         )}
         {imageUrl === undefined && (
            <ImageBasedContainer color={color}>PV</ImageBasedContainer>
         )}
      </>
   )
}

export default ImageBasedComponents
