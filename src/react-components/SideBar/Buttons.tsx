import {
  HStack,
  Text,
  Button,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { EXTERNAL_LINK } from '../../tools'

export const Buttons = () => {
  const buttonColor = useColorModeValue('primary.300', 'primary.600')
  const buttonColorOnHover = useColorModeValue('primary.500', 'primary.500')
  return (
    <HStack w="100%" alignItems={'center'}>
      {EXTERNAL_LINK.map(({ href, text, icon }, i) => (
        <Link key={i} fontWeight={'bold'} href={href} isExternal>
          <HStack alignItems={'center'}>
            <Icon as={icon} h={5} w={5} />
            <Text fontSize={'lg'}>{text}</Text>
          </HStack>
        </Link>
      ))}
      <Button
        bg={buttonColor}
        _hover={{ bg: `${buttonColorOnHover}` }}
        as="a"
        w="100%"
        rounded={'full'}
        href={'/Diego_Cano_Full-Stack-Developer.pdf'}
        download={'/Diego_Cano_Full-Stack-Developer.pdf'}>
        <HStack alignItems={'center'}>
          <Text fontSize={'lg'}>Resume</Text>
        </HStack>
      </Button>
    </HStack>
  )
}
