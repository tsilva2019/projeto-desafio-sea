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
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
        {etapaConcluida && <TextEtapaStyles>concluído</TextEtapaStyles>}
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
      <BoxButtonEtapaStyled>
        <ButtonMenuEtapa>
          <EtapaSVG></EtapaSVG>
        </ButtonMenuEtapa>
        <TextEtapaStyles>ITEM 1</TextEtapaStyles>
      </BoxButtonEtapaStyled>
    </EtapaMenuStyled>
  );
};

export default EtapaMenu;
