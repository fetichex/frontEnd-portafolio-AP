import { Stack } from '@chakra-ui/react'
import { AboutSection } from './component'
import Slider from '../Slider'

export default function About() {
  return (
    <Stack
      direction={{base: 'column'}}
      h='100vh'
      alignItems={'center'}
      justifyContent={'center'}
      spacing={'12'}>
      <AboutSection />
      <Slider />
    </Stack>
  )
}
