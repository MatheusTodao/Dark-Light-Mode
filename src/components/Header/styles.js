import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.6rem;
  box-shadow: ${({ theme }) => theme.boxShadowHeader};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.texts.text};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }


  #wrapper-logo {
    font-size: 1.5rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.texts.logo};
      font-family: 'Poppins', sans-serif;
      font-weight: 700;

      span {
        color: ${({ theme }) => theme.colors.texts.text};
        font-weight: 400;

      }

    }
  }
`;

export const WrapperRoute = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundHeader};
  padding: 0 ${({ theme }) => theme.spacing.large};

`;

export const Routes = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {

  }
`;

export const Route = styled.li`
  list-style: none;
  & + & {
    padding-left: ${({ theme }) => theme.spacing.large};
  }

  a {
    opacity: .6;
  }

  ${({ active }) => active && css`
    a {
      opacity: 1;
      font-weight: 600;
    }
  `}

  button {
    border: none;
    background: none;
  }

`;
