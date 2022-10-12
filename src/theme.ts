import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
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
      500: '#151717'
    },
    myWhite: {
      500: '#F0E8C9'
    }
  },
  styles: {
    global: (props: ThemeConfig) => ({
      '#root, html, body': {
        h: '100vh',
        color: mode('myBlack.500', 'myWhite.500')(props)
      },
      'html::-webkit-scrollbar': {
        display: 'none'
      },
      body: {
        bg: mode('myWhite.500', 'myBlack.500')(props)
      }
    })
  },
  components: {
    Text: {
      variants: {
        stroke: (props: ThemeConfig) => ({
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: mode('#151717', '#F0E8C9')(props),
          color: mode('myWhite.500', 'myBlack.500')(props),
          transition: 'color 0.1s ease-in-out',
          _hover: {
            color: mode('myBlack.500', 'myWhite.500')(props),
            transition: 'color 0.1s ease-in-out'
          }
        })
      }
    }
  }
})

export default theme
