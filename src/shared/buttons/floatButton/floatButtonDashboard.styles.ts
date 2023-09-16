import { Button } from 'antd';
import styled from 'styled-components';
export const BoxPosition = styled.div`
  position: absolute;
  right: 16px;
  top: 203px;
`;
export const FloatButtonDashboardStyle = styled(Button)`
  width: 49px;
  height: 84px;
  background: #4fa1c1;
  border-radius: 0 10px 10px 0;
  color: white;

  &:hover {
    border: 3px solid #4fa1c1;
    color: white;
  }
`;
