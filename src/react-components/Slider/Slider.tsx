import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {
  Box,
  Stack,
  Image,
  Text,
  useDisclosure,
  SlideFade
} from '@chakra-ui/react'
import { IMAGES } from './images'

export default function Slider() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        width: 600,
        drag: false,
        interval: 3000,
        speed: 400,
        rewind: true,
        pagination: false,
        gap: '1rem',
        easing: 'ease-in-out'
      }}
      aria-label='My Favorite Images'>
      {IMAGES.map((img, i) => (
        <SplideSlide>
          <Image
            key={i}
            src={img.image}
            rounded={'1rem'}
            onMouseEnter={onToggle}
            onMouseLeave={onToggle}
          />
          <SlideFade in={isOpen} offsetY='10px'>
            <Box>
              <Text>{img.info}</Text>
            </Box>
          </SlideFade>
        </SplideSlide>
      ))}
    </Splide>
  )
}
