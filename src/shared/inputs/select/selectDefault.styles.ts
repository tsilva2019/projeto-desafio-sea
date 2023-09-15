import { Select } from 'antd';
import styled from 'styled-components';

export const BoxSelect = styled.div`
  width: auto;
`;
export const SelectDefaultStyled = styled(Select)`
  width: 100%;
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
