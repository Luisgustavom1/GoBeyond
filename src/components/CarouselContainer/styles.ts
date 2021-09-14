import styled from 'styled-components';

interface ICarouselProps {
  bannerSlide: number,
  rollX: number,
  widthSlides: string,
  height: string
}

export const Container = styled.div<ICarouselProps>`
  display: flex;
  width: 100%;
  height: ${({ height }) => height};

  transform: ${({ bannerSlide, rollX }) => `translateX(${bannerSlide * - rollX}vw)`};

  transition: 1s;

  div {
    flex: none;

    width: ${({ widthSlides}) => `${widthSlides}`};
    height: 100%;
  }

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
  }
`;