import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setEtapaConcluidaAction } from '.';

export const useEtapaReducer = () => {
  const dispatch = useDispatch();
  const { etapaConcluida } = useAppSelector((state) => state.etapaReducer);
  const setEtapaConcluida = (currentEtapa: boolean) => {
    dispatch(setEtapaConcluidaAction(currentEtapa));
  };
  return {
    etapaConcluida,
    setEtapaConcluida,
  };
};
