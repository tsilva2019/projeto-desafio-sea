import { UploadProps as UploadPropsAntd } from 'antd';

import { BoxUpload, UploadStyled } from './uploadButton.styles';

interface UploadProps extends UploadPropsAntd {
  margin?: string;
  height?: string;
  background?: string;
  color?: string;
}
const UploadButton = ({ margin, height, background, color, ...props }: UploadProps) => {
  return (
    <BoxUpload style={{ margin }}>
      <UploadStyled style={{ height, background, color }} {...props} />
    </BoxUpload>
  );
};

export default UploadButton;
