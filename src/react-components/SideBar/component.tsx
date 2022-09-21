import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

export const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button w={'100%'} py={2} rounded={'full'} onClick={toggleColorMode}>
      {colorMode === 'light'
        ? (
        <Icon as={IoIosMoon} h={5} w={5} />
          )
        : (
        <Icon as={IoIosSunny} h={5} w={5} />
          )}
    </Button>
  )
}
