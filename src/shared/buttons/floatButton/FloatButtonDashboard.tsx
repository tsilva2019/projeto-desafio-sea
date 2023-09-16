import { DashOutlined } from '@ant-design/icons';
import { ButtonProps, ConfigProvider } from 'antd';

import { FloatButtonDashboardStyle } from './floatButtonDashboard.styles';

interface FloatButtonProps extends ButtonProps {
  right?: string;
  top?: string;
}
const FloatButtonDashboard = ({ right, top, ...props }: FloatButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgTextHover: 'white',
          colorLink: 'white',
          colorLinkHover: 'white',
          colorPrimaryHover: 'white',
        },
      }}
    >
      <FloatButtonDashboardStyle style={{ right, top }} {...props}>
        <DashOutlined />
      </FloatButtonDashboardStyle>
    </ConfigProvider>
  );
};

export default FloatButtonDashboard;
