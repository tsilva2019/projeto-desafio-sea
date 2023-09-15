import { SelectProps as SelectPropsAntd } from 'antd';

import { LabelInput } from '../inputText/inputText.styles';
import { BoxSelect, SelectDefaultStyled } from './selectDefault.styles';

interface SelectProps extends SelectPropsAntd {
  label?: string;
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
  optionsSelect: SelectProps['options'];
}
const SelectDefault = ({
  label,
  margin,
  height,
  background,
  color,
  optionsSelect,
}: SelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      {label && <LabelInput>{label}</LabelInput>}
      <SelectDefaultStyled
        style={{ height, background, color }}
        size="large"
        options={optionsSelect}
      />
    </BoxSelect>
  );
};

export default SelectDefault;
