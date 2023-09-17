import { TextEtapaStyles } from '../../modules/funcionarios/components/components.styles';
import { useEtapaReducer } from '../../store/reducers/etapaReducer/useEtapaReducer';
import ButtonMenuEtapa from '../buttons/buttonMenu/ButtonMenuEtapa';
import EtapaSVG from '../icons/EtapaSVG';
import TimeLineSVG from '../icons/TimeLineEtapa';
import {
  BoxButtonEtapaStyled,
  EtapaMenuStyled,
  PositionTimeLineEtapaStyled,
} from './etapaMenu.styles';

const EtapaMenu = () => {
  const { etapaConcluida } = useEtapaReducer();
  return (
    <EtapaMenuStyled>
      <PositionTimeLineEtapaStyled>
        <TimeLineSVG />
      </PositionTimeLineEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        {etapaConcluida && <TextEtapaStyles>ITEM CONCLUÍDO</TextEtapaStyles>}
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
      </BoxButtonEtapaStyled>
    </EtapaMenuStyled>
  );
};

export default EtapaMenu;
