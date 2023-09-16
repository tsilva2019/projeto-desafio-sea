import { TitleProps as TitlePropsAntd } from 'antd/es/typography/Title';

import { CampoBgBlueStyles } from './components.styles';
interface TitleProps extends TitlePropsAntd {
  value?: string;
}
const CampoBgBlue = ({ value, ...props }: TitleProps) => {
  return <CampoBgBlueStyles {...props}>{value}</CampoBgBlueStyles>;
};

export default CampoBgBlue;
