import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Box, Image } from '@chakra-ui/react'
import { IMAGES } from './images'

export default function Slider() {
  return (
    <Box clipPath={'border-box'} rounded="1rem">
      <Splide
        options={{
          height: '100vh',
          gap: 1,
          type: 'loop',
          autoplay: true,
          arrows: false,
          drag: false,
          interval: 2500,
          speed: 1000,
          rewind: true,
          pagination: false,
          easing: 'ease-in-out'
        }}
        aria-label='about images'>
        {IMAGES.map((img, i) => (
          <SplideSlide key={i}>
            <Image h="100%" objectFit={'cover'} src={img.image} />
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  )
}
