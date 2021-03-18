import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    font-size: 2rem;
    color: ${props => props.theme.colors.text};
    margin-top: 40px;
  }

  p{
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  span{
    margin-top: 4rem;
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};

  border: 1px solid ${props => props.theme.colors.secundary};
  border-radius: 4px;

  height: 40px;
  padding: 0px 15px;
  margin-top: 3rem;

  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;

  cursor: pointer;

  transition: ease-in filter 0.2s;
  
  &:hover{
    filter: grayscale(0.2);
  }
`;