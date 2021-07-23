import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.texts.text};

  }

  body {
    font-size: 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 0 ${({ theme }) => theme.spacing.large};
    height: 100%;
  }

  main {
    margin-top: 5.8rem;
  }

  button {
    cursor: pointer;
  }
`;
