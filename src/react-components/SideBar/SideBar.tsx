import { Link as ReachLink, useLocation } from 'wouter'
import {
  HStack,
  Link,
  Icon,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { ToggleColorButton } from './component'
import { SECTIONS } from '../../tools'
import { TypeChildren } from '../../interfaces'

const SideBar = ({ children }: TypeChildren) => {
  const [location, setLocation] = useLocation()
  const borderColor = useColorModeValue('blackAlpha.200', 'witheAlpha.200')
  return (
    <HStack
    w={'100%'}
    pos={'fixed'}
    zIndex={2}
    px={'30px'}
      spacing=" 40px"
      alignItems={'center'}
      borderBottomWidth={1}
      justifyContent={'space-between'}
      borderBottomColor={borderColor}>
      <Link as={ReachLink} href="/">
        <HStack as={'a'}>
          <Text fontSize={'45px'} fontWeight={700}>DC</Text>
        </HStack>
      </Link>
      <HStack
        justifyContent={'space-between'}
        spacing={'20px'}>
        {SECTIONS.map(({ href, text, activeIcon, inactiveIcon }, i) => (
          <Link
            key={i}
            as={ReachLink}
            href={href}
            onClick={() => setLocation(href)}>
            <Link>
              <HStack alignItems={'center'}>
                <Icon
                  as={location !== href ? inactiveIcon : activeIcon}
                  h={5}
                  w={5}></Icon>
                <Text fontSize={'lg'}>{text}</Text>
              </HStack>
            </Link>
          </Link>
        ))}
        <Stack direction="row" spacing={3}>
          {children}
        </Stack>
        <HStack w={'100%'}>
          <ToggleColorButton />
        </HStack>
      </HStack>
    </HStack>
  )
}

export default SideBar
