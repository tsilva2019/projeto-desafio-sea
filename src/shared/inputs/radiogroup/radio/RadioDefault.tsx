import { Radio, RadioProps as RadioPropsAntd } from 'antd';

import { BoxInput, LabelInput } from '../../inputText/inputText.styles';

interface RadioProps extends RadioPropsAntd {
  label?: string;
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const RadioDefault = ({ label, height, background, color, ...props }: RadioProps) => {
  const options = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
  ];
  return (
    <BoxInput>
      {label && <LabelInput>{label}</LabelInput>}
      <Radio.Group options={options} style={{ height, background, color }} {...props} />
    </BoxInput>
  );
};

export default RadioDefault;
