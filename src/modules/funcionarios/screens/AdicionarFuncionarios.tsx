import { UploadOutlined } from '@ant-design/icons';
import { Checkbox, Col, Form, Row } from 'antd';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import CardPrincipal from '../../../shared/cards/cardPrincipal/CardPrincipal';
import InputText from '../../../shared/inputs/inputText/InputText';
import RadioDefault from '../../../shared/inputs/radiogroup/radio/RadioDefault';
import SelectDefault from '../../../shared/inputs/select/SelectDefault';
import SwitchDefault from '../../../shared/inputs/switch/SwitchDefault';
import UploadButton from '../../../shared/inputs/upload/UploadButton';

const AdicionarFuncionario = () => {
  const [fileList, setFileList] = useState('');
  return (
    <CardPrincipal title="Adicionar Funcionário" headerBg="#4FA1C1" style={{ maxWidth: '850px' }}>
      <Form layout="vertical">
        <div className="container">
          <Row>
            <Col span={12}>
              <p className="text-form">O trabalhador está ativo ou inativo?</p>
            </Col>
            <Col span={4} offset={8}>
              <SwitchDefault checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked />
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col span={12}>
              <InputText margin="0 0 12px 0" label="Nome" style={{ maxWidth: '338px' }} />
              <InputText margin="0 0 12px 0" label="CPF" style={{ maxWidth: '338px' }} />
              <InputText margin="0 0 12px 0" label="RG" style={{ maxWidth: '338px' }} />
            </Col>

            <Col span={12}>
              <RadioDefault margin="0 0 12px 0" label="Sexo" />
              <InputText margin="0 0 12px 0" label="Data de Nascimento" />
              <SelectDefault
                label="Cargo"
                optionsSelect={[
                  {
                    value: 'Cargo 1',
                    label: 'Cargo 1',
                  },
                  {
                    value: 'Cargo 2',
                    label: 'Cargo 2',
                  },
                ]}
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
                {
                  value: 'Ativid. 1',
                  label: 'Ativid. 1',
                },
                {
                  value: 'Ativid. 2',
                  label: 'Ativid. 2',
                },
              ]}
            />
            <div className="section-epi">
              <SelectDefault
                margin="8px 0 0 0"
                label="Selecione o EPI:"
                optionsSelect={[
                  {
                    value: 'Calçado de Segurança',
                    label: 'Calçado de Segurança',
                  },
                  {
                    value: 'Luva de Segurança',
                    label: 'Luva de Segurança',
                  },
                  {
                    value: 'Capacete de Segurança',
                    label: 'Capacete de Segurança',
                  },
                ]}
              />

              <InputText label="Informe o número do CA:" margin="8px 0 0 8px" />
              <a>Adicionar EPI</a>
            </div>
            <Button margin="8px 0 12px 0" height="36px" background="none" color="#3A3A3A">
              Adicionar outra Atividade
            </Button>
          </div>
        </div>
        <div className="container">
          <p>Adicione Atestado de Saúde Ocupacional (opcional):</p>
          <InputText value={fileList} style={{ maxWidth: '100%' }} />
          <UploadButton
            beforeUpload={(file) => {
              setFileList(file.name);
              console.log(fileList);
            }}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Selecionar arquivo</Button>
          </UploadButton>
        </div>
        <Button margin="0 0 12px 0" height="36px" background="none" color="#3A3A3A">
          Salvar
        </Button>
      </Form>
    </CardPrincipal>
  );
};
export default AdicionarFuncionario;
