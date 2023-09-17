import axios from 'axios';
import { useEffect } from 'react';

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
import { useEtapaReducer } from '../../../store/reducers/etapaReducer/useEtapaReducer';
import { useFormFuncionarioShowReducer } from '../../../store/reducers/formFuncionarioShowReducer/useFormFuncionarioShowReducer';
import {
  setFuncionariosAction,
  setFuncionariosAtivosAction,
} from '../../../store/reducers/funcionarioReducer';
import { useFuncionarioReducer } from '../../../store/reducers/funcionarioReducer/useFuncionarioReducer';
import LineTableDashboard from '../components/LineTableDashboard';

const DashboardFuncionarios = () => {
  const { etapaConcluida, setEtapaConcluida } = useEtapaReducer();
  const { formFuncionario, setActiveFormFuncionario } = useFormFuncionarioShowReducer();
  const { dashboard, setActiveDashboard } = useDashboardReducer();
  const { funcionariosDashboard, setFuncionariosDashboard } = useFuncionarioReducer();
  const { funcionarios, funcionariosAtivos } = useAppSelector((state) => state.funcionarioReducer);

  useEffect(() => {
    axios
      .get('http://localhost:3000/funcionarios')
      .then((response) => {
        setFuncionariosAction(response.data);
        setFuncionariosDashboard(response.data);
        setFuncionariosAtivosAction(response.data);
        console.log(funcionarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEtapaConcluida = (checked: boolean) => {
    setEtapaConcluida(checked);
    console.log(etapaConcluida);
  };
  const handleActiveFormFuncionario = () => {
    setActiveDashboard(false);
    setActiveFormFuncionario(true);

    console.log('dashboard:', dashboard);
    console.log('formFuncionario:', formFuncionario);
  };

  const handleFiltraFuncionarios = () => {
    setFuncionariosDashboard(funcionariosAtivos);
  };
  const handleLimpaFiltraFuncionarios = () => {
    setFuncionariosDashboard(funcionarios);
  };
  useEffect(() => {
    axios
      .get('http://localhost:3000/funcionarios')
      .then((response) => {
        setFuncionariosDashboard(response.data);

        console.log(funcionarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <Button height="60px" color="#4fa1c1" onClick={handleActiveFormFuncionario}>
            + Adicionar Funcionário
          </Button>
        </div>

        <LimitedButtonsDashboard>
          <Button width="192px" height="32px" color="#4fa1c1" onClick={handleFiltraFuncionarios}>
            Ver apenas ativos
          </Button>

          <Button
            width="192px"
            height="32px"
            color="#4fa1c1"
            onClick={handleLimpaFiltraFuncionarios}
          >
            Limpar filtros
          </Button>
          <div style={{ marginLeft: 'auto' }}>
            <p>
              Ativos {funcionariosAtivos?.length}/{funcionarios?.length}
            </p>
          </div>
        </LimitedButtonsDashboard>
        <LimitedLinesDashboard>
          {funcionariosDashboard?.map((funcionario) => (
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
