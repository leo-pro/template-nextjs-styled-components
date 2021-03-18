import { useContext, useState } from 'react';
import Image from 'next/image';

import { Container, Button} from '../styles/pages/Home';

import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { LightbulbFill } from '@styled-icons/bootstrap/';
import { LightbulbOff } from '@styled-icons/bootstrap/';

interface Props{
  toggleTheme(): void,
}

export default function Home ({toggleTheme} : Props) {
  const { title } = useContext(ThemeContext);

  // const LightsOff = styled(LightbulbOff)`
  //   font-size: 5px;
  // `;
  // const LightsOn = styled(LightbulbFill)`
  //   font-size: 5px;
  // `;
  
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

      <Button onClick={toggleTheme}>
        {title === 'dark'? <LightbulbOff width={20}/> : <LightbulbFill width={20}/> }
        {title === 'dark'? ' Turn Light on' : ' Turn Light off'}
      </Button>

      <span>Made with Next.js by <a href="https://devleo.com.br" target="_blank">Leonardo Alves</a></span>
    </Container>
  )
}
