import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${props =>
      props.theme.title === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.black};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  span {
    margin-top: 4rem;
  }
`

export const Button = styled.button`
  border-radius: 0.5rem;
  border: none;
  color: ${props => props.theme.colors.buttonText};
  min-width: 14.5rem;
  min-height: 4rem;
  margin: 1.25rem 0;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 500;
  cursor: pointer;
  line-height: 33px;
  letter-spacing: -0.094rem;
  background: linear-gradient(90deg, #00c6c2 0%, #00b0bd 0.01%, #3730a3 100%);
  transition: 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`
