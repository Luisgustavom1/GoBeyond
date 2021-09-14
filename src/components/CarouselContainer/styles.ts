import styled from 'styled-components';

interface ICarouselProps {
  bannerSlide: number,
  rollX: number,
  widthSlidesVW: number
}

export const Container = styled.div<ICarouselProps>`
  display: flex;
  width: 100%;
  height: 43rem;

  transform: ${({ bannerSlide, rollX }) => `translateX(${bannerSlide * - rollX}vw)`};

  transition: 1s;

  div {
    flex: none;

    width: ${({ widthSlidesVW }) => `${widthSlidesVW}vw`};
    height: 100%;
  }

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
  }
`;