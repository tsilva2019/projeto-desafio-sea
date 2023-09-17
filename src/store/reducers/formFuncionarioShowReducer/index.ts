import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface FormFuncionarioShowState {
  formFuncionario: boolean;
}

// Define the initial state using that type
const initialState: FormFuncionarioShowState = {
  formFuncionario: false,
};

export const counterSlice = createSlice({
  name: 'formFuncionarioShowReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActiveFormFuncionarioAction: (state, action: PayloadAction<boolean>) => {
      state.formFuncionario = action.payload;
    },
  },
});

export const { setActiveFormFuncionarioAction } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
