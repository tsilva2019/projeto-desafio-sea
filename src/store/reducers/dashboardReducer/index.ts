import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface DashboardState {
  dashboard: boolean;
}

// Define the initial state using that type
const initialState: DashboardState = {
  dashboard: true,
};

export const counterSlice = createSlice({
  name: 'dashboardReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActiveDashboardAction: (state, action: PayloadAction<boolean>) => {
      state.dashboard = action.payload;
    },
  },
});

export const { setActiveDashboardAction } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
