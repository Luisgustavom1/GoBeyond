import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  background: #000000;

  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;

  article {
    width: 24rem;
    line-height: 2rem;
    span {
      display: flex;

      width: 4.5rem;
      height: .4rem;

      background-color: #E9BF33;

      margin: 1.8rem 0;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    padding: 5.6rem 0; 
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3rem;

    color: #E9BF33;

    img {
      margin-top: .5rem;
    }
  }
`;
