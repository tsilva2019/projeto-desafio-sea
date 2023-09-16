//import { useState } from 'react';
import './assets/global.css';

import { Col, Row } from 'antd';
import { Layout } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';

import { PositionHumanStyles } from './modules/funcionarios/components/components.styles';
import AdicionarFuncionario from './modules/funcionarios/screens/AdicionarFuncionarios';
import Button from './shared/buttons/button/Button';
import { BoxButtonEtapa } from './shared/buttons/button/button.styles';
import CardPrincipal from './shared/cards/cardPrincipal/CardPrincipal';
import { LimitedContentStyled } from './shared/delimitadores/delimitadores.styles';
import EtapaMenu from './shared/etapaMenu/EtapaMenu';
import HumanSVG from './shared/icons/HumanSVG';
import SiderMenu from './shared/siderMenu/SiderMenu';
import { useFuncionarioReducer } from './store/reducers/funcionarioReducer/useFuncionarioReducer';

const { Header, Content } = Layout;

function App() {
  const { funcionarios, setFuncionarios } = useFuncionarioReducer();
  useEffect(() => {
    axios
      .get('http://localhost:3000/funcionarios')
      .then((response) => {
        setFuncionarios(response.data);
        console.log(funcionarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <SiderMenu />
      <PositionHumanStyles>
        <HumanSVG />
      </PositionHumanStyles>
      <LimitedContentStyled>
        <Header
          style={{
            height: 'auto',
            paddingRight: '50px',
            paddingLeft: '10px',
            background: '#f5f5f5',
          }}
        >
          <CardPrincipal
            style={{
              height: '159px',
              padding: '10px',
              margin: '16px 20px',
            }}
            bodyStyle={{ paddingTop: '8px' }}
          >
            <EtapaMenu />
          </CardPrincipal>
        </Header>
        <Content
          style={{
            margin: '34px 16px',
            minHeight: 280,
          }}
        >
          <Row>
            <Col span={9}>
              <CardPrincipal style={{ maxWidth: '500px', height: '484px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit
                porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis.
                Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus
                vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce
                quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus
                urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
                Phasellus tempor tellus eu vulputate tempus.
              </CardPrincipal>
            </Col>
            <Col span={15} style={{ display: 'flex', justifyContent: 'end' }}>
              <AdicionarFuncionario />
            </Col>
          </Row>
          <BoxButtonEtapa>
            <Button background="#4FA1C1" width="194px" height="32px" color="white">
              Próximo passo
            </Button>
          </BoxButtonEtapa>
        </Content>
      </LimitedContentStyled>
    </Layout>
  );
}

export default App;
