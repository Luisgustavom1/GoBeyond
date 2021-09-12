import styled from 'styled-components';
import flex from '../../styles/Components/Flex';

export const Container = styled.header`    
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem 30rem;
`;

export const AsideStyle = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
  }
`;

export const ArticleStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8rem;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.4rem
  }
`;

export const SearchStyle = styled.div`
  border-bottom: 1.00051px solid #7A7A7A;

  width: 26rem;
  
  padding-bottom: .8rem;

  font-size: 1.4rem
`;