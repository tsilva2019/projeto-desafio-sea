import { useDispatch } from 'react-redux';

import { FuncionarioType } from '../../../modules/funcionarios/types/FuncionarioType';
import { useAppSelector } from '../../hooks';
import {
  setFuncionariosAction,
  setFuncionariosAtivosAction,
  setFuncionariosDashboardAction,
} from '.';

export const useFuncionarioReducer = () => {
  const dispatch = useDispatch();
  const { funcionarios, funcionariosAtivos, funcionariosDashboard } = useAppSelector(
    (state) => state.funcionarioReducer,
  );
  const setFuncionarios = (currentFuncionarios: FuncionarioType[]) => {
    dispatch(setFuncionariosAction(currentFuncionarios));
  };
  const setFuncionariosAtivos = (currentFuncionariosAtivos: FuncionarioType[]) => {
    const filtered = currentFuncionariosAtivos.filter(
      (currentFuncionarioAtivo) => currentFuncionarioAtivo.status == true,
    );
    dispatch(setFuncionariosAtivosAction(filtered));
  };
  const setFuncionariosDashboard = (funcionariosDashboard: FuncionarioType[] | undefined) => {
    dispatch(setFuncionariosDashboardAction(funcionariosDashboard));
  };
  return {
    funcionarios,
    funcionariosAtivos,
    funcionariosDashboard,
    setFuncionarios,
    setFuncionariosAtivos,
    setFuncionariosDashboard,
  };
};
