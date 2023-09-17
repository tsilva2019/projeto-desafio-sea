import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FuncionarioType } from '../../../modules/funcionarios/types/FuncionarioType';

// Define a type for the slice state
interface FuncionarioState {
  funcionarios?: FuncionarioType[];
  funcionariosAtivos?: FuncionarioType[];
  funcionariosDashboard?: FuncionarioType[];
}

// Define the initial state using that type
const initialState: FuncionarioState = {
  funcionarios: [],
  funcionariosAtivos: [],
  funcionariosDashboard: [],
};

export const counterSlice = createSlice({
  name: 'funcionarioReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFuncionariosAction: (state, action: PayloadAction<FuncionarioType[]>) => {
      state.funcionarios = action.payload;
      console.log(state.funcionarios);
    },
    setFuncionariosAtivosAction: (state, action: PayloadAction<FuncionarioType[]>) => {
      state.funcionariosAtivos = action.payload;
    },
    setFuncionariosDashboardAction: (
      state,
      action: PayloadAction<FuncionarioType[] | undefined>,
    ) => {
      state.funcionariosDashboard = action.payload;
      console.log(state.funcionarios);
    },
  },
});

export const {
  setFuncionariosAction,
  setFuncionariosAtivosAction,
  setFuncionariosDashboardAction,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
