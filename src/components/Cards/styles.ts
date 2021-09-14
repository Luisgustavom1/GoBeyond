import styled from 'styled-components';
import { ButtonStyle } from '../Button/styles';

export const Container = styled.div`
  width: 21.6rem;
  height: 36.5rem;

  text-align: center;

  box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, .2);
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;
  }

  h1, p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
    color: #7A7A7A;
  }

  h3 {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  span {
    color: #E9BF33;
  }

  img {
    margin-bottom: 1rem;
  }
`;

export const NewButton = styled(ButtonStyle)`
  background: #00E676;

  margin: 1rem auto;
`;