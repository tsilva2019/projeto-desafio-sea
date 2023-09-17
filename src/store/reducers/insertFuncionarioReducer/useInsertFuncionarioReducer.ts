import { useDispatch } from 'react-redux';

import { FuncionarioType } from '../../../modules/funcionarios/types/FuncionarioType';
import { useAppSelector } from '../../hooks';
import { setInsertFuncionariosAction } from '.';

export const useInsertFuncionarioReducer = () => {
  const dispatch = useDispatch();
  const { insertFuncionarios } = useAppSelector((state) => state.insertFuncionarioReducer);
  const setInsertFuncionario = (currentFuncionarios: FuncionarioType[]) => {
    dispatch(setInsertFuncionariosAction(currentFuncionarios));
  };

  return {
    insertFuncionarios,
    setInsertFuncionario,
  };
};
