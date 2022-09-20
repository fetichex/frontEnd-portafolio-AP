import { Link as ReachLink } from 'wouter'
import { VStack, HStack, Heading, Link, Icon } from '@chakra-ui/react'
import { IoPerson, IoSparkles, IoConstruct } from 'react-icons/io5'
import { ToggleColorButton } from './component'

export default function SideBar() {
  return (
    <VStack
      p={6}
      alignItems={'center'}
      justifyContent={'space-between'}
      spacing={6}
      borderRightWidth={1}
      borderRightColor={'gray.700'}>
      <Link as={ReachLink} href="/">
        <HStack as={'a'} alignItems={'center'}>
          <Heading>DC</Heading>
        </HStack>
      </Link>
      <VStack h={'50%'} alignItems={'start'} justifyContent={'space-between'}>
        <Link as={ReachLink} href="/about">
          <HStack alignItems={'center'}>
            <Icon as={IoPerson}></Icon>
            <Link>About</Link>
          </HStack>
        </Link>
        <Link as={ReachLink} href="/about">
          <HStack alignItems={'center'}>
            <Icon as={IoConstruct}></Icon>
            <Link>Tools</Link>
          </HStack>
        </Link>
        <Link as={ReachLink} href="/about">
          <HStack alignItems={'center'}>
            <Icon as={IoSparkles}></Icon>
            <Link>Projects</Link>
          </HStack>
        </Link>
      </VStack>
      <HStack>
        <ToggleColorButton />
      </HStack>
    </VStack>
  )
}
