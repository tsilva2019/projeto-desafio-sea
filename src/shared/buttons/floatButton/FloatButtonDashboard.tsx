import { DashOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

import { FloatButtonDashboardStyle } from './floatButtonDashboard.styles';

const FloatButtonDashboard = () => {
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
      <FloatButtonDashboardStyle>
        <DashOutlined />
      </FloatButtonDashboardStyle>
    </ConfigProvider>
  );
};

export default FloatButtonDashboard;
