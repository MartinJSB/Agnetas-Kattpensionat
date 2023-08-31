import { useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Button } from '../../common/Button';
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  Logo
} from './styles';

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setVisibility(false);
    };
    return (
      <>
        {/* TODO Fixa IDS!!?!?!?!?! */}
        <CustomNavLinkSmall onClick={() => scrollTo('omoss')}>
          <Span>{'Om oss'}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('priser')}>
          <Span>{'Priser'}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('hittahit')}>
          <Span>{'Hitta hit'}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('kontakt')}>
          <Span>{'Kontakt'}</Span>
        </CustomNavLinkSmall>
        {/* <CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <Span>
            <Button>{'Kontakt'}</Button>
          </Span>
        </CustomNavLinkSmall> */}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Logo>Agnetas Kattpensionat</Logo>
          </LogoContainer>

          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
