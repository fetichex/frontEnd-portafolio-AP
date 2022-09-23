import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: {
      100: '#fef8e5',
      200: '#fcecb3',
      300: '#fae081',
      400: '#f8d44f',
      500: '#f5c204',
      600: '#c49b03'
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
        color: mode('blackAlpha.800', 'whiteAlpha.800')(props)
      },
      body: {
        bg: mode('myWhite.500', 'myBlack.500')(props)
      }
    })
  }
})

export default theme
