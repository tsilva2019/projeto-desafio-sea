import { Select as SelectAntd } from 'antd';
import styled from 'styled-components';

export const BoxSelect = styled.div`
  width: auto;
`;
export const SelectDefaultStyled = styled(SelectAntd)`
  width: 100%;
  height: 38;
  color: #4f4f4f;
  border: 1px solid #4fa1c1;
  border-radius: 10px;
  &:hover {
    border: 3px solid #4fa1c1;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
