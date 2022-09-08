import { Image, Show } from '@chakra-ui/react'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { IMAGES } from './images'

export default function Slider() {
  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        drag: true,
        width: 650,
        arrows: false,
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
          <Image rounded={'2xl'} key={i} src={img.image} alt={img.alt} />
        </SplideSlide>
      ))}
    </Splide>
  )
}
