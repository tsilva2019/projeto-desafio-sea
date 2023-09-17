import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setActiveFormFuncionarioAction } from '.';

export const useFormFuncionarioShowReducer = () => {
  const dispatch = useDispatch();
  const { formFuncionario } = useAppSelector((state) => state.formFuncionarioShowReducer);
  const setActiveFormFuncionario = (currentForm: boolean) => {
    dispatch(setActiveFormFuncionarioAction(currentForm));
  };
  return {
    formFuncionario,
    setActiveFormFuncionario,
  };
};
