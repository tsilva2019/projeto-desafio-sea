import { Radio, RadioProps as RadioPropsAntd } from 'antd';

import { BoxInput, LabelInput } from '../../inputText/inputText.styles';
import { RadioDefaultStyled } from './radioDefault.styles';

interface RadioProps extends RadioPropsAntd {
  label?: string;
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const RadioDefault = ({ label, height, background, color, ...props }: RadioProps) => {
  return (
    <BoxInput>
      <div>{label && <LabelInput>{label}</LabelInput>}</div>
      <Radio.Group>
        <RadioDefaultStyled value={1} style={{ height, background, color }} {...props}>
          Masculino
        </RadioDefaultStyled>
        <RadioDefaultStyled value={2} style={{ height, background, color }} {...props}>
          Feminino
        </RadioDefaultStyled>
      </Radio.Group>
    </BoxInput>
  );
};

export default RadioDefault;
