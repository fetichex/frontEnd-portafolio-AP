import { extendTheme } from '@chakra-ui/react'

const customeTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: {
      'html, body, #root': { height: '100vh' }
    }
  }
})

const theme = extendTheme({ customeTheme })

export default theme
