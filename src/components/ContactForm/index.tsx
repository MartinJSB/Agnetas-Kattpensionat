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
  LinkText
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
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <h6>{title}</h6>
            <Paragraph>
              <Text> {ContactContent.address.address}</Text>
              <Text> {ContactContent.address.postalAdress}</Text>
              <Text> {ContactContent.address.postalNumber}</Text>
            </Paragraph>
            <Paragraph>
              <Text> {ContactContent.number.phone}</Text>
              <Text> {ContactContent.number.mobile}</Text>
            </Paragraph>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <Paragraph>
              <BoldText> {ContactContent.info}</BoldText>
            </Paragraph>
            <Paragraph>
              <Text> {ContactContent.mail}</Text>
            </Paragraph>
            <LinkText href="https://goo.gl/maps/J8SdTkWm1gH1sfDm7">
              Hitta hit!
            </LinkText>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
