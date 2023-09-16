import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph, Text } = Typography;
export const LineTableDashboardStyles = styled.div`
  width: 100%;
  height: 84px;
  background: #edf1f5;
  border-radius: 10px;
  padding: 15px 15px;
`;

export const CampoBgBlueStyles = styled(Paragraph)`
  height: 24px;
  background: #4fa1c1;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  border-radius: 36px;
  padding: 5px 15px;
  margin: 5px;
`;

export const NomeLineDashboardStyles = styled(Text)`
  width: 100%;
  height: auto;
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
`;

export const TextEtapaStyles = styled(Text)`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;
  color: #4fa1c1;
`;
