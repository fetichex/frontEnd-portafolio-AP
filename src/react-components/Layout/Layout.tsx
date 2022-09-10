import { Container, Stack } from '@chakra-ui/react'

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <Container alignSelf={'center'} maxWidth={'container.xl'}>
      <Stack spacing={'10'}>{children}</Stack>
    </Container>
  )
}
