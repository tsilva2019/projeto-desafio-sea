import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setEtapaConcluidaAction } from '.';

export const useDashboardReducer = () => {
  const dispatch = useDispatch();
  const { etapaConcluida } = useAppSelector((state) => state.dashboardReducer);
  const setEtapaConcluida = (currentEtapa: boolean) => {
    dispatch(setEtapaConcluidaAction(currentEtapa));
  };
  return {
    etapaConcluida,
    setEtapaConcluida,
  };
};
