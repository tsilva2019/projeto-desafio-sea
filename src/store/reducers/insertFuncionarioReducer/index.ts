import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { FuncionarioType } from '../../../modules/funcionarios/types/FuncionarioType';

// Define a type for the slice state
interface InsertFuncionarioState {
  insertFuncionarios?: FuncionarioType[];
}

// Define the initial state using that type
const initialState: InsertFuncionarioState = {
  insertFuncionarios: undefined,
};

export const counterSlice = createSlice({
  name: 'insertFuncionarioReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setInsertFuncionariosAction: (state, action: PayloadAction<FuncionarioType[]>) => {
      axios({
        method: 'post',
        url: 'http://localhost:3000/funcionarios',
        data: action.payload,
      }).then((response) => {
        console.log(response);
      });
    },
  },
});

export const { setInsertFuncionariosAction } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
