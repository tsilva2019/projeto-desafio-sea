import { ButtonProps } from 'antd';

import { BoxButton, ButtonStyled } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
  height?: string;
  width?: string;
  background?: string;
  color?: string;
}
const Button = ({ margin, height, width, background, color, ...props }: ButtonCurrentProps) => {
  return (
    <BoxButton style={{ margin, width }}>
      <ButtonStyled style={{ height, width, background, color }} {...props} />
    </BoxButton>
  );
};

export default Button;
