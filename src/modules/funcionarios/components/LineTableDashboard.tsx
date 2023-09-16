import FloatButtonDashboard from '../../../shared/buttons/floatButton/FloatButtonDashboard';
import { BoxPosition } from '../../../shared/buttons/floatButton/floatButtonDashboard.styles';
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
    <LineTableDashboardStyles>
      <div>
        <NomeLineDashboardStyles>{nome}</NomeLineDashboardStyles>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <CampoBgBlue level={5} value={cpf} />
        <CampoBgBlue level={5} value={atividade} />
        <CampoBgBlue level={5} value={cargo} />
      </div>
      <BoxPosition>
        <FloatButtonDashboard />
      </BoxPosition>
    </LineTableDashboardStyles>
  );
};

export default LineTableDashboard;
