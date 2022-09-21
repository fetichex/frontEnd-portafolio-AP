import { VStack, Heading, Text } from '@chakra-ui/react'

export const IntroSection = () => {
  return (
    <VStack spacing={{ base: '0.5rem', md: '1rem', lg: '2rem', xl: '3rem' }} alignItems="center">
      <Heading
        fontWeight={600}
        fontSize={{ base: '4xl', sm: '45px', md: '55px', lg: '12rem' }}>
        <Text>{"Hi I'm Diego Cano"}</Text>
        <Text mt={'2.5rem'} fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5rem' }}>
          {'Full Stack Web Developer!'}
        </Text>
      </Heading>

    </VStack>
  )
}
