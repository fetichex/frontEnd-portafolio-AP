import { Text, Button, Icon, useColorMode } from '@chakra-ui/react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

export const Logo = () => {
  return <Text>Logo</Text>
}

export const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <Icon as={IoIosMoon} h={5} w={5} />
      ) : (
        <Icon as={IoIosSunny} h={5} w={5} />
      )}
    </Button>
  )
}
