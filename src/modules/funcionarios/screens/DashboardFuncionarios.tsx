import Button from '../../../shared/buttons/button/Button';
import CardPrincipal from '../../../shared/cards/cardPrincipal/CardPrincipal';
import {
  LimitedButtonsDashboard,
  LimitedContentCardStyled,
  LimitedLinesDashboard,
} from '../../../shared/delimitadores/delimitadores.styles';
import { LabelInput } from '../../../shared/inputs/inputText/inputText.styles';
import SwitchDefault from '../../../shared/inputs/switch/SwitchDefault';
import { BoxSwitchDashboard } from '../../../shared/inputs/switch/switchDefault.style';
import { useAppSelector } from '../../../store/hooks';
import { useDashboardReducer } from '../../../store/reducers/dashboardReducer/useDashboardReducer';
import LineTableDashboard from '../components/LineTableDashboard';

const DashboardFuncionarios = () => {
  const { etapaConcluida, setEtapaConcluida } = useDashboardReducer();
  const handleEtapaConcluida = (checked: boolean) => {
    setEtapaConcluida(checked);
    console.log(etapaConcluida);
  };
  const { funcionarios } = useAppSelector((state) => state.funcionarioReducer);
  return (
    <CardPrincipal
      title="Funcionário(s)"
      headerBg="#4FA1C1"
      style={{ maxWidth: '850px', height: '100%' }}
    >
      <LimitedContentCardStyled>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button height="60px" color="#4fa1c1">
            + Adicionar Funcionário
          </Button>
        </div>

        <LimitedButtonsDashboard>
          <Button width="192px" height="32px" color="#4fa1c1">
            Ver apenas ativos
          </Button>

          <Button width="192px" height="32px" color="#4fa1c1">
            Limpar filtros
          </Button>
          <div style={{ marginLeft: 'auto' }}>
            <p>Ativos 2/25</p>
          </div>
        </LimitedButtonsDashboard>
        <LimitedLinesDashboard>
          {funcionarios?.map((funcionario) => (
            <LineTableDashboard
              key={funcionario.id}
              nome={funcionario.nome}
              atividade={funcionario.atividade}
              cargo={funcionario.cargo}
              cpf={funcionario.cpf}
            />
          ))}
        </LimitedLinesDashboard>
      </LimitedContentCardStyled>
      <BoxSwitchDashboard>
        <LabelInput>A etapa está concluída?</LabelInput>
        <SwitchDefault
          checkedChildren="Sim"
          unCheckedChildren="Não"
          onChange={handleEtapaConcluida}
        />
      </BoxSwitchDashboard>
    </CardPrincipal>
  );
};

export default DashboardFuncionarios;
