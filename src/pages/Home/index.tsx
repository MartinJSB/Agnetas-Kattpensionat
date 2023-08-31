import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import PrisContent from '../../content/PrisContent.json';
import ContactContent from '../../content/ContactContent.json';
import CatHealth from '../../content/CatHealth.json';
import { CarouselBlock } from '../../components/CarouselBlock';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const MapsBlock = lazy(() => import('../../components/MapsBlock'));
const CatHealthBlock = lazy(() => import('../../components/CatHealthBlock'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={
          <>
            {IntroContent.text.map((text, i) => {
              return <p key={i}>{text}</p>;
            })}
          </>
        }
        button={IntroContent.button}
        icon="img/jpg/agneta.jpg"
        id="omoss"
      />
      <CarouselBlock
        title={'Här bor katterna'}
        images={[
          'img/jpg/a.jpg',
          'img/jpg/2.jpg',
          'img/jpg/6.jpg',
          'img/jpg/3.jpg',
          'img/jpg/7.jpg',
          'img/jpg/a1.jpg',
          'img/jpg/b2.jpg',
          'img/jpg/4.jpg',
          'img/jpg/8.jpg',
          'img/jpg/gard.jpg'
        ]}
      />
      <CatHealthBlock
        title={CatHealth.title}
        content={CatHealth.text}
        id="hittahit"
      ></CatHealthBlock>
      <ContentBlock
        type="left"
        title={PrisContent.title}
        content={
          <>
            {PrisContent.text.map((text, i) => {
              return <p key={i}>{text}</p>;
            })}
          </>
        }
        icon="img/gif/money.gif"
        id="pris"
      />
      <MapsBlock
        title={CatHealth.title}
        content={CatHealth.text}
        id="hittahit"
      />
      {<Contact title={ContactContent.title} content={'ditt'} id="contact" />}
    </Container>
  );
};

export default Home;
