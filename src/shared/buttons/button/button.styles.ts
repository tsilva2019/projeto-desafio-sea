import { Button } from 'antd';
import styled from 'styled-components';

export const BoxButton = styled.div`
  width: 100%;
  height: auto;
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
