import { Text, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'

export default function ToggleColorButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColorButton = useColorModeValue('myBlack.500', 'myWhite.500')
  const txColorButton = useColorModeValue('myWhite.500', 'myBlack.500')
  return (
    <Button
      bg={'transparent'}
      border={'2px'}
      h={'40px'}
      onClick={toggleColorMode}
      rounded={'full'}
      variant={'unstyled'}
      cursor={'default'}
      w={'107px'}
      transition="color 0.2s ease-in-out, background 0.2s ease-in-out"
      _hover={{
        bg: bgColorButton,
        color: txColorButton,
        transition: 'color 0.2s ease-in-out, background 0.2s ease-in-out'
      }}>
      {colorMode === 'light' ? (
        <Text fontSize={'md'} fontWeight={'bold'}>
          DARK
        </Text>
      ) : (
        <Text fontSize={'md'} fontWeight={'bold'}>
          LIGHT
        </Text>
      )}
    </Button>
  )
}
