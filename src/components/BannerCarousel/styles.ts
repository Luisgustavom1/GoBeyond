import styled from 'styled-components';

interface ICarouselProps {
  bannerSlide: number
}

export const Container = styled.section`
  max-width: 100vw;
  height: 43rem;

  display: grid;
  place-items: center;

  position: relative;

  article {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;

    padding: 0 2rem;

    color: white;

    i {
      font-size: 2rem;

      &:hover {
        transform: scale(1.4);
      }
    }
  }

  aside {
    margin-right: 40%;
    width: 50%;

    p {
      font-size: 3rem;
      font-weight: 700;
    }
    h3 {
      font-size: 4.2rem;
      font-weight: 900;
      color: #E9BF33;
    }
  }

`;

export const Carousel = styled.div<ICarouselProps>`
  display: flex;
  width: 100vw;
  height: 43rem;

  transform: ${({ bannerSlide }) => `translateX(${bannerSlide * -100}vw)`};

  div {
    flex: none;

    width: 100vw;
    height: 100%;
  }

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
  }
`;