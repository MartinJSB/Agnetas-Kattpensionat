import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Fade, Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import {
  CarouselBlockSection,
  Content,
  ContentWrapper,
  ImageWrapper
} from './styles';
// Import Swiper React components

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface CarouselBlockProps {
  title: string;
  images: string[];
}

export const CarouselBlock = ({ title, images }: CarouselBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <CarouselBlockSection>
      <Fade direction="right">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              {/* <Swiper slidesPerView={2} spaceBetween={0}>
                {images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <ImageWrapper>
                      <img src={image} />
                    </ImageWrapper>
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <Carousel>
                {images.map((image, i) => (
                  <ImageWrapper>
                    <img src={image} />
                  </ImageWrapper>
                ))}
              </Carousel>
            </Col>
          </ContentWrapper>
        </Row>
      </Fade>
    </CarouselBlockSection>
  );
};
