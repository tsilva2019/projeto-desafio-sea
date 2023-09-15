import { ConfigProvider, SwitchProps as SwitchPropsAntd } from 'antd';

import { BoxSwitch, SwitchDefaultStyled } from './switchDefault.style';

interface SwitchProps extends SwitchPropsAntd {
  height?: string;
  background?: string;
  color?: string;
}
const SwitchDefault = ({ height, background, color, ...props }: SwitchProps) => {
  return (
    <BoxSwitch>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              multipleItemBorderColor: '#4fa1c1',
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
