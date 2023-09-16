import { Layout } from 'antd';
import styled from 'styled-components';

export const BoxItemMenuSiderStyled = styled.div`
  width: 57px;
  height: 42px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-left: 3px solid white;
  }
`;

export const SiderMenuStyled = styled(Layout.Sider)`
  max-width: 58px !important;
  flex: 0 0 58px !important;
  min-width: 58px !important;
  width: 58px !important;
  background: #4fa1c1 !important;
  border-radius: 0 20px 20px 0 !important;
  position: fixed !important;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const LogoSpaceStyled = styled.div`
  width: 58px;
  height: 41px;
  position: absolute;
  top: 50px;
  background-color: white;
`;
