import styled from 'styled-components';
import flex from '../../styles/Components/Flex';

export const Container = styled.header`    
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 2rem 25rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
  }

  @media(max-width: 1100px) {
    padding: 2rem 15rem;
  }

  @media(max-width: 900px) {
    padding: 2rem 5rem;
  }
`;

export const SearchStyle = styled.div`
  border-bottom: 1.00051px solid #7A7A7A;

  width: 26rem;
  
  padding-bottom: .8rem;

  font-size: 1.4rem
`;