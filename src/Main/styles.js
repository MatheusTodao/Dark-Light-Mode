import styled from 'styled-components';

export const Container = styled.article`
  width: 60.8rem;
  height: 31.4rem;

  display: grid;
  grid-template-columns: 40rem 1fr;
  grid-template-rows: 36.6rem 1fr;
  grid-template-areas:
    'title .'
    'description image';
  background: ${({ theme }) => theme.colors.backgroundCard};

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const SideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  width: 100%;

  padding: ${({ theme }) => theme.spacing.large};

  h1 {
    grid: title;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.texts.title};

    span {
      color: ${({ theme }) => theme.highlightText};
    }
  }

  p {
    grid: description;
    font-size: 1.5rem;

    span {
      color: ${({ theme }) => theme.highlightText};
      font-weight: 600;

      &.uppercase {
        text-transform: uppercase;
      }
    }
  }

`;

export const SideImage  = styled.div`
  position: relative;
  img {
    position: absolute;
    grid: image;
    bottom: 2.75rem;
    right: 1rem;
    width: 18rem;
    height: 28.3rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};

  }
`;

