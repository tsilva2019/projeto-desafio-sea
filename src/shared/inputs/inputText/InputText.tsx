import { InputProps as InputPropsAntd } from 'antd';

import { BoxInput, InputTextStyled, LabelInput } from './inputText.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const InputText = ({ label, margin, height, background, color }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {label && <LabelInput>{label}</LabelInput>}
      <InputTextStyled style={{ height, background, color }} />
    </BoxInput>
  );
};

export default InputText;
