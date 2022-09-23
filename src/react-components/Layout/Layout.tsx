import { Container, Stack } from '@chakra-ui/react'
import { TypeChildren } from '../../interfaces'

export default function Layout({ children }: TypeChildren) {
  return (
    <Container h={'100%'} alignSelf={'center'} maxWidth={'8xl'}>
      <Stack direction={'column'} h={'100%'}>
        <Stack justify={'center'} align={'center'} h="100%" w="100%" px={6}>
          {children}
        </Stack>
      </Stack>
    </Container>
  )
}
