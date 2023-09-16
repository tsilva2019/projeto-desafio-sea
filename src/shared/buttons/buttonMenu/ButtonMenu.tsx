import { ButtonProps as ButtonPropsAntd } from 'antd';

import { ButtonMenuStyles } from './buttonMenu.styles';

interface ButtonProps extends ButtonPropsAntd {
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const ButtonMenu = ({ margin, height, background, color, ...props }: ButtonProps) => {
  return (
    <ButtonMenuStyles style={{ margin, height, background, color }} {...props}></ButtonMenuStyles>
  );
};

export default ButtonMenu;
