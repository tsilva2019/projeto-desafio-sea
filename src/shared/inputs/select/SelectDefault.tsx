import { SelectProps as SelectPropsAntd } from 'antd';

import { BoxInput, LabelInput } from '../inputText/inputText.styles';
import { SelectDefaultStyled } from './selectDefault.styles';

interface SelectProps extends SelectPropsAntd {
  label?: string;
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  optionsSelect: SelectProps['options'];
}
const SelectDefault = ({
  label,
  margin,
  width,
  height,
  background,
  color,
  optionsSelect,
}: SelectProps) => {
  return (
    <BoxInput style={{ margin, width }}>
      {label && <LabelInput style={{ width }}>{label}</LabelInput>}
      <SelectDefaultStyled style={{ width, height, background, color }} options={optionsSelect} />
    </BoxInput>
  );
};

export default SelectDefault;
