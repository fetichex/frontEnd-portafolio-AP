import { Circle, Icon, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

export const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgCircle = useColorModeValue('myBlack.500', 'myWhite.500')

  return (
    <Circle size={'50px'} as={'button'} bg={bgCircle} onClick={toggleColorMode}>
      {colorMode === 'light'
        ? (
        <Icon as={IoIosMoon} h={5} w={5} />
          )
        : (
        <Icon as={IoIosSunny} h={5} w={5} />
          )}
    </Circle>
  )
}
