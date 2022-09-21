import { Link as ReachLink, useLocation } from 'wouter'
import {
  VStack,
  HStack,
  Heading,
  Link,
  Icon,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { ToggleColorButton } from './component'
import LINKS from './LINKS'

interface ButtonsProps {
  children: JSX.Element
}

const SideBar = ({ children }: ButtonsProps) => {
  const [location, setLocation] = useLocation()
  const borderColor = useColorModeValue('blackAlpha.200', 'witheAlpha.200')
  return (
    <VStack
      pl={2}
      pr={12}
      py={6}
      alignItems={'center'}
      spacing={20}
      borderRightWidth={1}
      borderRightColor={borderColor}>
      <Link as={ReachLink} href="/">
        <HStack as={'a'} alignItems={'center'}>
          <Heading>DC</Heading>
        </HStack>
      </Link>
      <VStack h={'lg'} alignItems={'start'} spacing={20}>
        {LINKS.map((link, i) => (
          <Link
            key={i}
            as={ReachLink}
            href={link.href}
            onClick={() => setLocation(link.href)}>
            <Link>
              <HStack alignItems={'center'}>
                <Icon
                  as={
                    location !== link.href ? link.inactiveIcon : link.activeIcon
                  }
                  h={5}
                  w={5}></Icon>
                <Text fontSize={'lg'}>{link.text}</Text>
              </HStack>
            </Link>
          </Link>
        ))}
        <Stack direction="row" spacing={3}>
          {children}
        </Stack>
        <HStack w={'100%'} alignSelf={'center'}>
          <ToggleColorButton />
        </HStack>
      </VStack>
    </VStack>
  )
}

export default SideBar
