import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from './reducers/dashboardReducer';
import etapaReducer from './reducers/etapaReducer';
import formFuncionarioShowReducer from './reducers/formFuncionarioShowReducer';
import funcionarioReducer from './reducers/funcionarioReducer';
import insertFuncionarioReducer from './reducers/insertFuncionarioReducer';

const store = configureStore({
  reducer: {
    etapaReducer,
    funcionarioReducer,
    formFuncionarioShowReducer,
    insertFuncionarioReducer,
    dashboardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
