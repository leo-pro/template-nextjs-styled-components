import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'

import * as themes from '../styles/theme'
import { useLocalStorage } from '../hooks/useLocalStorage'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.light)
  const [darkMode, setDarkMode] = useLocalStorage(
    'template-nextjs-darkMode',
    false
  )

  useEffect(() => {
    if (darkMode) {
      setTheme(themes.dark)
    } else {
      setTheme(themes.light)
    }
  }, [darkMode])

  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
