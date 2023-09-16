import { useDispatch } from 'react-redux';

import { FuncionarioType } from '../../../modules/funcionarios/types/FuncionarioType';
import { useAppSelector } from '../../hooks';
import { setFuncionariosAction } from '.';

export const useFuncionarioReducer = () => {
  const dispatch = useDispatch();
  const { funcionarios } = useAppSelector((state) => state.funcionarioReducer);
  const setFuncionarios = (currentFuncionarios: FuncionarioType[]) => {
    dispatch(setFuncionariosAction(currentFuncionarios));
  };
  return {
    funcionarios,
    setFuncionarios,
  };
};
