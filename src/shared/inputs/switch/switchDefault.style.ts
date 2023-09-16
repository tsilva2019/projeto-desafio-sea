import { Switch } from 'antd';
import styled from 'styled-components';

export const BoxSwitch = styled.div`
  width: auto;
  height: 34.75px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const BoxSwitchDashboard = styled.div`
  width: auto;
  height: 34.75px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 24px;
`;

export const SwitchDefaultStyled = styled(Switch)`
  text-align: end;
  display: flex;
  align-items: end;
  align-content: end;
  justify-content: end;
  margin: 5px;
`;
