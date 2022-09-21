import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: {
      500: '#f5c204'
    },
    myBlack: {
      500: '#191919'
    },
    myWhite: {
      500: '#e9e5e5'
    }
  },
  styles: {
    global: (props: ThemeConfig) => ({
      '#root, html, body': {
        h: '100vh',
        color: mode(undefined, 'whiteAlpha.800')(props)
      },
      body: {
        bg: mode('myWhite.500', 'myBlack.500')(props)
      }
    })
  }
})

export default theme
