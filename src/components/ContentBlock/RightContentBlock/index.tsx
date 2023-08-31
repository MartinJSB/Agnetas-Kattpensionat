import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../common/SvgIcon';
import { Button } from '../../../common/Button';
import { ContentBlockProps } from '../types';
import { Fade } from 'react-awesome-reveal';
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ImageShadow
} from './styles';

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo('contact')}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageShadow>
              <img src={icon} alt={icon} width="100%" height="100%" />
            </ImageShadow>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
