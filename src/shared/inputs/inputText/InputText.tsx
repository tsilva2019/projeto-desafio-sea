import { InputProps as InputPropsAntd } from 'antd';

import { BoxInput, InputTextStyled, LabelInput } from './inputText.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const InputText = ({ label, margin, height, background, color, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {label && <LabelInput>{label}</LabelInput>}
      <InputTextStyled style={{ height, background, color }} {...props} />
    </BoxInput>
  );
};

export default InputText;
