import { Stack, Text, Button, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'

export const Buttons = () => {
  return (
    <Stack alignItems={'center'} direction={'row'} spacing={7}>
      <Link fontWeight={'bold'} href="https://github.com/fetichex" isExternal>
        <Stack direction="row" spacing={4}>
          <Icon as={FaGithub} h={6} w={6} />
          <Text>GitHub</Text>
        </Stack>
      </Link>
      <Link
        fontWeight={'bold'}
        href="https://www.linkedin.com/in/diegocano-fullstackdeveloper/"
        isExternal>
        <Stack direction="row" spacing={4}>
          <Icon as={FaLinkedin} h={6} w={6} />
          <Text>LinkedIn</Text>
        </Stack>
      </Link>
      <Link
        as={'a'}
        href={'/Diego_Cano_Full-Stack-Developer.pdf'}
        download={'/Diego_Cano_Full-Stack-Developer.pdf'}>
        <Button rounded={'full'}>
          <Stack direction="row" spacing={4}>
            <Icon as={FaUser} />
            <Text mt={1}>Resume</Text>
          </Stack>
        </Button>
      </Link>
    </Stack>
  )
}
