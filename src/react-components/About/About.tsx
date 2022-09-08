import { HStack } from '@chakra-ui/react'
import { AboutSection } from './component'
import Slider from '../Slider'

export default function About() {
  return (
    <HStack h='100vh' spacing={10}>
      <AboutSection />
      <Slider />
    </HStack>
  )
}
