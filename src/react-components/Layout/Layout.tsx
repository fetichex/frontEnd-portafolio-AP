import { Container, Stack } from '@chakra-ui/react'
import { TypeChildren } from '../../interfaces'

export default function Layout({ children }: TypeChildren) {
  return (
    <Container h={'100vh'} alignSelf={'center'} maxWidth={'1900px'}>
      <Stack direction={'column'} h={'100%'}>
        <Stack justify={'center'} align={'center'} h="100%" w="100%">
          {children}
        </Stack>
      </Stack>
    </Container>
  )
}
