import { HStack, Stack, useColorModeValue } from '@chakra-ui/react'
import Layout from '../Layout'
import { Logo, ToggleColorButton } from './component'

export default function NavBar() {
  return (
    <Stack justifyContent={'center'} bg={useColorModeValue('gray.100', 'gray.900')} h={'8vh'}>
      <Layout>
        <HStack
          direction={'row'}
          justify={'space-between'}
          alignItems={'center'}>
          <Logo />
          <Stack>
            <ToggleColorButton />
          </Stack>
        </HStack>
      </Layout>
    </Stack>
  )
}
