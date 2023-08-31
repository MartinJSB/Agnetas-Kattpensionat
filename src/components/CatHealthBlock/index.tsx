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
import { SvgIcon } from '../../common/SvgIcon';
import {
  ContactContainer,
  FormGroup,
  Span,
  ButtonContainer,
  Paragraph,
  Text,
  BoldText
} from './styles';
import HealthContent from '../../content/CatHealth.json';
import { LinkText } from '../ContactForm/styles';
import catImg from '../../../public/img/svg/Gat3.svg';

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
            <SvgIcon src="Gat3.svg" width="200px" height="200px" />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <Paragraph>
              <h6>{title}</h6>
              <Text> {HealthContent.text}</Text>
            </Paragraph>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
