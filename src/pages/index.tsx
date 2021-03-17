import Head from 'next/head'
import Image from 'next/image'

import { Container } from '../styles/pages/Home';

export default function Home () {
  return (
    <Container>
      <Image
        src="https://devleo.com.br/assets/images/logo.png"
        alt="devleo logo"
        width={250}
        height={65}
      />
      <h1>Boilerplate to start new projects in Next.js with Styles-components</h1>
      <p>Optime configuration for styled-components and ESLint</p>
    </Container>
  )
}
