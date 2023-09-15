import { CardProps as CardPropsAntd, ConfigProvider } from 'antd';

import { CardPrincipalStyled } from './cardPrincipal.styles';

//import { BoxCard } from './cardPrincipal.styles';

interface CardProps extends CardPropsAntd {
  headerBg?: string;
}
const CardPrincipal = ({ headerBg, ...props }: CardProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerBg: headerBg,
            colorTextHeading: '#fff',
            borderRadiusLG: 20,
          },
        },
      }}
    >
      <CardPrincipalStyled {...props} />
    </ConfigProvider>
  );
};

export default CardPrincipal;
