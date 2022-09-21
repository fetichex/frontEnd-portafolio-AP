import { Container, Stack } from '@chakra-ui/react'
import SideBar from '../SideBar'
import { Buttons } from '../SideBar/Buttons'

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <Container h={'100%'} alignSelf={'center'} maxWidth={'8xl'}>
      <Stack direction={'row'} h={'100%'}>
        <SideBar>
          <Buttons />
        </SideBar>
        <Stack justify={'center'} align={'center'} h="100%" w="100%" px={6}>
          {children}
        </Stack>
      </Stack>
    </Container>
  )
}
