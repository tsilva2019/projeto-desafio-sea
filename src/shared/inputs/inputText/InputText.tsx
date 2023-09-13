import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, LabelInput } from './inputText.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
}
const InputText = ({ label, ...props }: InputProps) => {
  return (
    <BoxInput>
      {label && <LabelInput>{label}</LabelInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default InputText;
