import {
  Stack,
  HStack,
  Text,
  Button,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const Buttons = () => {
  const buttonColor = useColorModeValue('red.400', 'teal.500')
  return (
    <Stack w="100%" alignItems={'flex-start'} direction={'column'} spacing={7}>
      <Link fontWeight={'bold'} href="https://github.com/fetichex" isExternal>
        <HStack alignItems={'center'}>
          <Icon as={IoLogoGithub} h={5} w={5} />
          <Text fontSize={'lg'}>GitHub</Text>
        </HStack>
      </Link>
      <Link
        fontWeight={'bold'}
        href="https://www.linkedin.com/in/diegocano-fullstackdeveloper/"
        isExternal>
        <HStack alignItems={'center'}>
          <Icon as={IoLogoLinkedin} h={5} w={5} />
          <Text fontSize={'lg'}>LinkedIn</Text>
        </HStack>
      </Link>
      <Button
        bg={buttonColor}
        as="a"
        w="100%"
        rounded={'full'}
        href={'/Diego_Cano_Full-Stack-Developer.pdf'}
        download={'/Diego_Cano_Full-Stack-Developer.pdf'}>
        <HStack alignItems={'center'}>
          <Text fontSize={'lg'}>Resume</Text>
        </HStack>
      </Button>
    </Stack>
  )
}
