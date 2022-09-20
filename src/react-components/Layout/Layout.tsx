import { Container, Stack, Box } from '@chakra-ui/react'
import SideBar from '../SideBar'

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <Container h={'100%'} alignSelf={'center'} maxWidth={'container.xl'}>
      <Stack direction={'row'} h={'100%'}>
        <SideBar />
        <Box px={6}>{children}</Box>
      </Stack>
    </Container>
  )
}
