import { theme as baseTheme } from '@chakra-ui/theme'

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    brown: {
      50: '#f8f0ea',
      100: '#e6d5c7',
      200: '#d4b59e',
      300: '#c17f59',
      400: '#8b5e3c',
      500: '#6b4226',
      600: '#3c2415',
      700: '#2a1a0f',
      800: '#1a0f09',
      900: '#0d0704',
    },
  },
}

export default theme
