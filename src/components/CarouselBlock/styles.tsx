import styled from 'styled-components';

export const CarouselBlockSection = styled('section')`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled('p')`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled('div')`
  max-width: 1000px;

  @media only screen and (max-width: 1100px) {
    max-width: 300px;
  }
`;

export const ImageWrapper = styled('div')`
  height: 500px;

  img {
    object-fit: contain;
    object-position: center;
    height: 100%;
  }

  @media only screen and (max-width: 1100px) {
    width: 200px;
    height: 150px;
    img {
      width: 150px;
    }
  }
`;
