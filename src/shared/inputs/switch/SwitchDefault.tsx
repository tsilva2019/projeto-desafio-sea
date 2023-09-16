import { ConfigProvider, SwitchProps as SwitchPropsAntd } from 'antd';

import { BoxSwitch, SwitchDefaultStyled } from './switchDefault.style';

interface SwitchProps extends SwitchPropsAntd {
  height?: string;
  background?: string;
  color?: string;
  margin?: string;
}
const SwitchDefault = ({ height, background, color, margin, ...props }: SwitchProps) => {
  return (
    <BoxSwitch style={{ margin }}>
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              colorPrimary: '#4fa1c1',
            },
          },
        }}
      >
        <SwitchDefaultStyled style={{ height, background, color }} {...props} />
      </ConfigProvider>
    </BoxSwitch>
  );
};

export default SwitchDefault;
