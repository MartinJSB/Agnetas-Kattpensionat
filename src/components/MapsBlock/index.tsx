import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import {
  ContactContainer,
  FormGroup,
  Span,
  ButtonContainer,
  Paragraph,
  Text,
  BoldText,
  Iframe
} from './styles';
import ContactContent from '../../content/ContactContent.json';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <Slide direction="right">
            <h6> Hitta hit!</h6>
            <a href="https://goo.gl/maps/J8SdTkWm1gH1sfDm7">Vreta Gård</a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2045.5638834793021!2d17.318924777063337!3d59.15642377453102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f11897d55a49d%3A0x8c9e5158b5d56ed1!2sAgnetas%20kattpensionat!5e0!3m2!1ssv!2sse!4v1693508386585!5m2!1ssv!2sse"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
