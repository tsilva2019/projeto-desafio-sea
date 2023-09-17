import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface EtapaState {
  etapaConcluida: boolean;
}

// Define the initial state using that type
const initialState: EtapaState = {
  etapaConcluida: false,
};

export const counterSlice = createSlice({
  name: 'etapaReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setEtapaConcluidaAction: (state, action: PayloadAction<boolean>) => {
      state.etapaConcluida = action.payload;
    },
  },
});

export const { setEtapaConcluidaAction } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
