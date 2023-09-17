import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from './reducers/dashboardReducer';
import etapaReducer from './reducers/etapaReducer';
import formFuncionarioReducer from './reducers/formFuncionarioReducer';
import funcionarioReducer from './reducers/funcionarioReducer';

const store = configureStore({
  reducer: {
    etapaReducer,
    funcionarioReducer,
    formFuncionarioReducer,
    dashboardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
