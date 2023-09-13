import { ButtonProps } from 'antd';

import { BoxInput } from '../../inputs/inputText/inputText.styles';
import { ButtonStyled } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const Button = ({ margin, height, background, color, ...props }: ButtonCurrentProps) => {
  return (
    <BoxInput style={{ margin }}>
      <ButtonStyled style={{ height, background, color }} {...props} />
    </BoxInput>
  );
};

export default Button;
