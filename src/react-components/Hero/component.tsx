import { Stack, VStack, Heading, Text } from '@chakra-ui/react'

interface IntroProps {
  children: JSX.Element
}

export const IntroSection = ({ children }: IntroProps) => {
  return (
    <VStack spacing={{ base: 5, md: 10 }} alignItems='center'>
      <Heading
        fontWeight={600}
        fontSize={{ base: '4xl', sm: '45px', md: '55px', lg: '7xl' }}>
        <Text>Hi I'm Diego Cano</Text>
        <Text fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '48px' }}>
          Full Stack Web Developer!
        </Text>
      </Heading>
      <Stack direction='row' spacing={3}>
        {children}
      </Stack>
    </VStack>
  )
}
