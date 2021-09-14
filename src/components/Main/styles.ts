import styled from 'styled-components';

export const Container = styled.main`

  padding-bottom: 3rem;

  > article {
    padding: 2.7rem 0 0 20rem;
  }

  .span:after {
    display: flex;
    background-color: #E9BF33;
    content: '';

    height: .45rem;
    width: 6.5rem;

    margin-bottom: 2rem;
  }
`;

export const Carousel = styled.div`
  width: 80%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 2rem;

  > i {
    font-size: 2rem;
    transition: 300ms ease-in-out;

    &:hover {
      transform: scale(1.4);
    }
  }
`