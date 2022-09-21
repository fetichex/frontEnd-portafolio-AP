import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Box, Image } from '@chakra-ui/react'
import { IMAGES } from './images'

export default function Slider() {
  return (
    <Box overflow={'hidden'} clipPath={'border-box'} rounded="1rem">
      <Splide
        options={{
          height: '25rem',
          gap: 1,
          type: 'loop',
          autoplay: true,
          drag: false,
          interval: 3000,
          speed: 400,
          rewind: true,
          pagination: false,
          easing: 'ease-in-out'
        }}
        aria-label="My Favorite Images">
        {IMAGES.map((img, i) => (
          <SplideSlide key={i}>
            <Image h="100%" objectFit={'cover'} src={img.image} />
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  )
}
