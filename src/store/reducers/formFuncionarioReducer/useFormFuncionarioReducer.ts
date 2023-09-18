import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setActiveFormFuncionarioAction } from '.';

export const useFormFuncionarioReducer = () => {
  const dispatch = useDispatch();
  const { formFuncionario } = useAppSelector((state) => state.formFuncionarioReducer);
  const setActiveFormFuncionario = (currentForm: boolean) => {
    dispatch(setActiveFormFuncionarioAction(currentForm));
  };
  return {
    formFuncionario,
    setActiveFormFuncionario,
  };
};
