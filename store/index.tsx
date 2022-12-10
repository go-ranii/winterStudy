import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { Task } from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./saga";

export interface SagaStore {
  sagaTask?: Task;
}

const devMode = true;

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: devMode,
});
sagaMiddleware.run(rootSaga);

const makeStore = () => {
  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export default wrapper;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
