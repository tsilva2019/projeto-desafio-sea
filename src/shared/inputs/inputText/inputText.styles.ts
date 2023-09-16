import { Input, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;
export const BoxInput = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled(Text)`
  width: 100%;
  height: auto;
  max-width: 338px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18.75px;
  color: #3a3a3a;
  margin: 8px 0px;
`;

export const InputTextStyled = styled(Input)`
  width: 100%;
  height: 36px;
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
