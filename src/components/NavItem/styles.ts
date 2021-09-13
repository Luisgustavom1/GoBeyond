import styled from 'styled-components';

export const Container = styled.section`
  &:hover {
    .dropdown {
      opacity: 1;
      transform: translateX(50%) rotateX(0deg)
    }
  }
`;

export const ContainerDropdown = styled.p`
  display: flex;
  align-items: center;

  gap: .7rem;

  i:hover {
    transform: scale(1.3);
  }
`;

export const MenuDropdown = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;

  position: relative;

  ul {
    padding: 1rem 1.5rem .5rem 1.5rem;
    margin-top: 1rem;

    background-color: gray;

    z-index: 999;
    position: absolute;

    top: 1rem;
    right: 50%;

    opacity: .25;
    transition: all 150ms ease-in;
    transform: translateX(50%) rotateX(-90deg);
    transform-origin: top center;
  }

  li {
    margin-bottom: .8rem;
    list-style: none;

    &:hover {
      background-color: rgba(128, 128, 185, .8);
    }
  }
`;