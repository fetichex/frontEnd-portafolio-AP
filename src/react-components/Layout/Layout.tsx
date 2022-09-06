import { Container } from '@chakra-ui/react'

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <Container alignSelf={'center'} maxWidth={'container.xl'}>
      {children}
    </Container>
  )
}
