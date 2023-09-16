import { Button } from 'antd';
import styled from 'styled-components';

export const BoxButton = styled.div`
  width: 100%;
  height: auto;
  margin: 8px;
`;

export const BoxButtonEtapa = styled.div`
  text-align: end;
  display: flex;
  align-items: end;
  align-content: end;
  justify-content: end;
  margin: 16px 5px;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  color: #4f4f4f;
  border: 1px solid #4fa1c1;
  border-radius: 10px;
  background: none;

  &:hover {
    border: 3px solid #4fa1c1;
  }
`;
