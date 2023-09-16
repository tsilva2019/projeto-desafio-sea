import { ButtonProps as ButtonPropsAntd } from 'antd';

import { ButtonMenuEtapaStyles } from './buttonMenuEtapa.styles';

interface ButtonProps extends ButtonPropsAntd {
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const ButtonMenuEtapa = ({ margin, height, background, color, ...props }: ButtonProps) => {
  return (
    <ButtonMenuEtapaStyles
      style={{ margin, height, background, color }}
      {...props}
    ></ButtonMenuEtapaStyles>
  );
};

export default ButtonMenuEtapa;
