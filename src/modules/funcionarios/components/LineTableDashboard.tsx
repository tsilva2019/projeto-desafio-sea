import FloatButtonDashboard from '../../../shared/buttons/floatButton/FloatButtonDashboard';
import { BoxPosition } from '../../../shared/buttons/floatButton/floatButtonDashboard.styles';
import CampoBgBlue from './campoBgblue';
import { LineTableDashboardStyles, NomeLineDashboardStyles } from './components.styles';

const LineTableDashboard = () => {
  return (
    <LineTableDashboardStyles>
      <div>
        <NomeLineDashboardStyles>Tiago Nascimento da Silva</NomeLineDashboardStyles>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <CampoBgBlue level={5} value="006.902.171-61" />
        <CampoBgBlue level={5} value="Ativ 00" />
        <CampoBgBlue level={5} value="Cargo 2" />
      </div>
      <BoxPosition>
        <FloatButtonDashboard />
      </BoxPosition>
    </LineTableDashboardStyles>
  );
};

export default LineTableDashboard;
