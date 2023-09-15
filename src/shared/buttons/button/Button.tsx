import { ButtonProps } from 'antd';

import { BoxButton, ButtonStyled } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const Button = ({ margin, height, background, color, ...props }: ButtonCurrentProps) => {
  return (
    <BoxButton style={{ margin }}>
      <ButtonStyled style={{ height, background, color }} {...props} />
    </BoxButton>
  );
};

export default Button;
