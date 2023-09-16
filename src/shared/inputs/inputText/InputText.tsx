import { InputProps as InputPropsAntd } from 'antd';

import { BoxInput, InputTextStyled, LabelInput } from './inputText.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
}
const InputText = ({ label, margin, width, height, background, color, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin, width }}>
      {label && <LabelInput style={{ width }}>{label}</LabelInput>}
      <InputTextStyled style={{ width, height, background, color }} {...props} />
    </BoxInput>
  );
};

export default InputText;
