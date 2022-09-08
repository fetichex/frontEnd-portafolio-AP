import { VStack, Text } from '@chakra-ui/react'

export function AboutSection() {
  return (
    <VStack>
      <Text fontSize={'4xl'} color={'orange.400'} fontWeight={600}> ABOUT ME...</Text>
      <Text as={'p'} fontSize={'xl'} textAlign={'justify'}>
        I am a Full Stack Web Developer. Proactive, persevering and
        detail-oriented. Focused on my professional growth and improving my hard
        and soft skills. Always looking for new challenges and knowledge.
        arduino enthusiast and embedded systems programming, lover of bicycles
        and architecture. I also have a degree in industrial product and
        furniture design.
      </Text>
    </VStack>
  )
}
