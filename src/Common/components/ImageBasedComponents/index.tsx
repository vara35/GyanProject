import { ImageBasedIcon, ImageBasedContainer } from './styledComponents'

interface ImageBasedComponentsProps {
   imageUrl?: string
   height: string
   color?: string
   margin?: string
   fontSize?: string
}

const ImageBasedComponents = (props: ImageBasedComponentsProps) => {
   const { imageUrl, height, color, margin, fontSize = '6px' } = props
   return (
      <>
         {imageUrl && (
            <ImageBasedIcon src={imageUrl} height={height} margin={margin} />
         )}
         {imageUrl === undefined && (
            <ImageBasedContainer
               height={height}
               color={color}
               fontSize={fontSize}
            >
               UI
            </ImageBasedContainer>
         )}
      </>
   )
}

export default ImageBasedComponents
