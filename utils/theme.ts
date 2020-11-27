import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// const colors = { black: '#16161D' }
// const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

export const theme = extendTheme({
  breakpoints,
  config
})
