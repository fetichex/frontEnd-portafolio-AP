import { Link as ReachLink, useLocation } from 'wouter'
import { HStack, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { SECTIONS } from '../../tools'

export default function SideBar() {
  const [location, setLocation] = useLocation()
  const borderColor = useColorModeValue('blackAlpha.300', 'witheAlpha.200')
  const linkBoderColor = useColorModeValue('myBlack.500', 'myWhite.500')
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
          <Text fontSize={'45px'} fontWeight={700}>
            Portfolio
          </Text>
        </HStack>
      </Link>
      <HStack justifyContent={'space-between'} spacing={'20px'}>
        {SECTIONS.map(({ href, text }, i) => (
          <Link
            key={i}
            as={ReachLink}
            href={href}
            onClick={() => setLocation(href)}>
            <Link
              border={'2px'}
              rounded={'full'}
              borderColor={location !== href ? 'transparent' : linkBoderColor}
              h={'-webkit-fit-content'}
              px={3}
              py={1}>
              <HStack alignItems={'center'}>
                <Text fontSize={'lg'}>{text}</Text>
              </HStack>
            </Link>
          </Link>
        ))}
      </HStack>
    </HStack>
  )
}
