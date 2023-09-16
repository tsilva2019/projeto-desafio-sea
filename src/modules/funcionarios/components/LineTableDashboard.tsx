import { Col, Row } from 'antd';

import FloatButtonDashboard from '../../../shared/buttons/floatButton/FloatButtonDashboard';
import CampoBgBlue from './campoBgblue';
import { LineTableDashboardStyles, NomeLineDashboardStyles } from './components.styles';

interface FuncionarioType {
  nome: string;
  atividade: string;
  cargo: string;
  cpf: string;
}
const LineTableDashboard = ({ nome, atividade, cargo, cpf }: FuncionarioType) => {
  return (
    <Row wrap={false}>
      <Col flex="auto">
        <LineTableDashboardStyles>
          <div>
            <NomeLineDashboardStyles>{nome}</NomeLineDashboardStyles>
          </div>
          <div style={{ width: '100%', display: 'flex' }}>
            <CampoBgBlue level={5} value={cpf} />
            <CampoBgBlue level={5} value={atividade} />
            <CampoBgBlue level={5} value={cargo} />
          </div>
        </LineTableDashboardStyles>
      </Col>
      <Col flex="none">
        <FloatButtonDashboard />
      </Col>
    </Row>
  );
};

export default LineTableDashboard;
