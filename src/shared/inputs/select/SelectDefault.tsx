import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxInput, LabelInput } from '../inputText/inputText.styles';

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
  ...props
}: SelectProps) => {
  return (
    <BoxInput style={{ margin, width }}>
      {label && <LabelInput style={{ width }}>{label}</LabelInput>}
      <SelectAntd style={{ width, height, background, color }} {...props} options={optionsSelect} />
    </BoxInput>
  );
};

export default SelectDefault;
