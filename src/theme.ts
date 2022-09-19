import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: {
      '#root, html, body': { h: '100vh' },
      a: {
        textDecoration: 'none'
      }
    }
  }
})

export default theme
