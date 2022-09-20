import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

export const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button colorScheme={'teal'} onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <Icon as={IoIosMoon} h={5} w={5} />
      ) : (
        <Icon as={IoIosSunny} h={5} w={5} />
      )}
    </Button>
  )
}
