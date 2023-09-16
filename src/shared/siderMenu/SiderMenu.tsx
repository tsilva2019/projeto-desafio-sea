import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import EditSVG from '../icons/EditSVG';
import HomeSVG from '../icons/HomeSVG';
import RedeSVG from '../icons/RedeSVG';
import SinoSVG from '../icons/SinoSVG';
import TimeSVG from '../icons/TimeSVG';
import UserSVG from '../icons/UserSVG';
import { BoxItemMenuSiderStyled, LogoSpaceStyled, SiderMenuStyled } from './siderMenu.styles';

const SiderMenu = () => {
  return (
    <SiderMenuStyled>
      <LogoSpaceStyled></LogoSpaceStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <HomeSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <EditSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <RedeSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <SinoSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <TimeSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
      <BoxItemMenuSiderStyled>
        <ButtonMenu>
          <UserSVG />
        </ButtonMenu>
      </BoxItemMenuSiderStyled>
    </SiderMenuStyled>
  );
};

export default SiderMenu;
