import { UploadOutlined } from '@ant-design/icons';
import { Checkbox, Col, RadioChangeEvent, Row } from 'antd';
import { ChangeEvent, useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import CardPrincipal from '../../../shared/cards/cardPrincipal/CardPrincipal';
import { LimitedForm } from '../../../shared/delimitadores/delimitadores.styles';
import InputText from '../../../shared/inputs/inputText/InputText';
import { LabelInput } from '../../../shared/inputs/inputText/inputText.styles';
import RadioDefault from '../../../shared/inputs/radiogroup/radio/RadioDefault';
import SelectDefault from '../../../shared/inputs/select/SelectDefault';
import SwitchDefault from '../../../shared/inputs/switch/SwitchDefault';
import UploadButton from '../../../shared/inputs/upload/UploadButton';
import { useDashboardReducer } from '../../../store/reducers/dashboardReducer/useDashboardReducer';
import { useFormFuncionarioShowReducer } from '../../../store/reducers/formFuncionarioShowReducer/useFormFuncionarioShowReducer';
import { useInsertFuncionarioReducer } from '../../../store/reducers/insertFuncionarioReducer/useInsertFuncionarioReducer';
import { FuncionarioType } from '../types/FuncionarioType';

const AdicionarFuncionario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [sexo, setSexo] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [cargo, setCargo] = useState('');
  const [atividade, setAtividade] = useState('');
  const [epi, setEPI] = useState('');
  const [ca, setCA] = useState('');
  const [atestado, setAtestado] = useState('');
  const [status, setStatus] = useState(true);

  const { dashboard, setActiveDashboard } = useDashboardReducer();
  const { formFuncionario, setActiveFormFuncionario } = useFormFuncionarioShowReducer();
  const { setInsertFuncionario } = useInsertFuncionarioReducer();

  const handleNome = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const handleCPF = (event: ChangeEvent<HTMLInputElement>) => {
    setCPF(event.target.value);
  };
  const handleRG = (event: ChangeEvent<HTMLInputElement>) => {
    setRG(event.target.value);
  };
  const handleSexo = ({ target: { value } }: RadioChangeEvent) => {
    setSexo(value);
  };
  const handleDtNascimento = (event: ChangeEvent<HTMLInputElement>) => {
    setDtNascimento(event.target.value);
  };
  const handleCargo = (value: string) => {
    setCargo(value);
  };
  const handleAtividade = (value: string) => {
    setAtividade(value);
  };
  const handleEPI = (value: string) => {
    setEPI(value);
  };
  const handleCA = (event: ChangeEvent<HTMLInputElement>) => {
    setCA(event.target.value);
  };
  const handleAtestado = (event: ChangeEvent<HTMLInputElement>) => {
    setAtestado(event.target.value);
  };
  const handleStatus = (checked: boolean) => {
    setStatus(checked);
  };

  const handleAddFuncionario = () => {
    setActiveDashboard(true);
    setActiveFormFuncionario(false);
    console.log('dashboard:', dashboard);
    console.log('formFuncionario:', formFuncionario);

    const currentFuncionario: FuncionarioType[] = {
      nome: nome,
      sexo: sexo,
      cpf: cpf,
      rg: rg,
      dt_nascimento: dtNascimento,
      cargo: cargo,
      atividade: atividade,
      epi: epi,
      ca: ca,
      atestado_saude: atestado,
      status: status,
    };
    setInsertFuncionario(currentFuncionario);
    console.log(currentFuncionario);
  };
  return (
    <CardPrincipal title="Adicionar Funcionário" headerBg="#4FA1C1" style={{ maxWidth: '850px' }}>
      <LimitedForm>
        <div className="container">
          <Row>
            <Col span={12}>
              <p className="text-form">O trabalhador está ativo ou inativo?</p>
            </Col>
            <Col span={4} offset={8}>
              <SwitchDefault
                checkedChildren="Ativo"
                unCheckedChildren="Inativo"
                defaultChecked
                onChange={handleStatus}
              />
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col span={12}>
              <InputText
                margin="0 0 12px 0"
                label="Nome"
                style={{ maxWidth: '338px' }}
                onChange={handleNome}
                value={nome}
              />
              <InputText
                margin="0 0 12px 0"
                label="CPF"
                style={{ maxWidth: '338px' }}
                onChange={handleCPF}
                value={cpf}
              />
              <InputText
                margin="0 0 12px 0"
                label="RG"
                style={{ maxWidth: '338px' }}
                onChange={handleRG}
                value={rg}
              />
            </Col>

            <Col span={12}>
              <RadioDefault margin="0 0 12px 0" label="Sexo" onChange={handleSexo} value={sexo} />

              <InputText
                margin="0 0 12px 0"
                label="Data de Nascimento"
                onChange={handleDtNascimento}
                value={dtNascimento}
              />
              <SelectDefault
                label="Cargo"
                optionsSelect={[
                  {
                    label: 'Cargo 1',
                    value: 'Cargo 1',
                  },
                  {
                    label: 'Cargo 2',
                    value: 'Cargo 2',
                  },
                ]}
                onChange={handleCargo}
              />
            </Col>
          </Row>
        </div>
        <div className="container">
          <p className="text-form">Quais EPIs o trabalhador usa na atividade?</p>
          <Checkbox>O trabalhador não usa EPI.</Checkbox>
          <div className="container">
            <SelectDefault
              label="Selecione a atividade:"
              optionsSelect={[
                { label: 'Ativid. 1', value: 'Ativid. 1' },
                {
                  label: 'Ativid. 2',
                  value: 'Ativid. 2',
                },
              ]}
              onChange={handleAtividade}
            />
            <div className="section-epi">
              <SelectDefault
                width="350px"
                margin="8px 0 0 0"
                label="Selecione o EPI:"
                optionsSelect={[
                  { label: 'Calçado de Segurança', value: 'Calçado de Segurança' },
                  { label: 'Luva de Segurança', value: 'Luva de Segurança' },
                  {
                    label: 'Capacete de Segurança',

                    value: 'Capacete de Segurança',
                  },
                ]}
                onChange={handleEPI}
              />

              <InputText
                label="Informe o número do CA:"
                width="250px"
                margin="8px 0 0 8px"
                onChange={handleCA}
              />
              <a>Adicionar EPI</a>
            </div>
          </div>
          <Button margin="8px 0 12px 0" height="36px" background="none" color="#3A3A3A">
            Adicionar outra Atividade
          </Button>
        </div>
        <div className="container">
          <LabelInput>Adicione Atestado de Saúde Ocupacional (opcional):</LabelInput>
          <InputText style={{ maxWidth: '100%' }} onChange={handleAtestado} value={atestado} />
          <UploadButton
            beforeUpload={(file) => {
              setAtestado(file.name);
            }}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Selecionar arquivo</Button>
          </UploadButton>
        </div>
        <div style={{ width: '100%' }}>
          <Button
            margin="8px 0"
            height="36px"
            background="none"
            color="#3A3A3A"
            onClick={handleAddFuncionario}
          >
            Salvar
          </Button>
        </div>
      </LimitedForm>
    </CardPrincipal>
  );
};
export default AdicionarFuncionario;
