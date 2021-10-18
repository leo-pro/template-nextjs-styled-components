import { useContext, useState } from 'react'
import Image from 'next/image'

import { Container, Button } from '../styles/pages/Home'

import { ThemeContext } from 'styled-components'

import { Flashlight } from '@styled-icons/fluentui-system-regular/'
import { FlashlightOff } from '@styled-icons/fluentui-system-regular/'

interface Props {
  toggleTheme(): void
}

export default function Home({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Image
        src="/logo-colorfull.svg"
        alt="devleo logo"
        width={250}
        height={65}
      />

      <h1>
        Boilerplate to start new projects in Next.js with Styles-components
      </h1>
      <p>
        Optimize configuration for styled-components and ESLint, including theme
        switcher
      </p>

      <Button onClick={toggleTheme}>
        {title === 'dark' ? (
          <FlashlightOff width={32} />
        ) : (
          <Flashlight width={32} />
        )}
        {title === 'dark' ? ' Lights off' : ' Lights on'}
      </Button>
      <span>
        Made with Next.js by{' '}
        <a href="https://devleo.com.br" target="_blank">
          Leonardo Alves
        </a>
      </span>
    </Container>
  )
}
