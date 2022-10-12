import { Stack, Text, Link, Icon } from '@chakra-ui/react'
import { EXTERNAL_LINK } from '../../tools'
import ToggleColorButton from './ToggleColorButton'

export default function Buttons() {
  return (
    <Stack
      w="fit-content"
      alignItems={'flex-start'}
      pos={'fixed'}
      right={'6rem'}
      top={'13rem'}
      zIndex={2}
      spacing={6}>
      {EXTERNAL_LINK.map(({ href, text, download, icon }, i) => (
        <Link
          key={i}
          fontWeight={'bold'}
          href={href}
          fontFamily={'mono'}
          download={download}
          isExternal>
          <Stack align={'flex-start'} direction={'row'}>
            <Icon as={icon} h={5} w={5} />
            <Text fontSize={'md'}>{text}</Text>
          </Stack>
        </Link>
      ))}
      <Stack>
        <ToggleColorButton />
      </Stack>
    </Stack>
  )
}
