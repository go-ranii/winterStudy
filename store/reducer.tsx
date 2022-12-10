import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import { flowName, flowReducer } from "./flow/slice";
import { reasonName, reasonReducer } from "./reason/slice";

const appReducer = combineReducers({
  [flowName]: flowReducer,
  [reasonName]: reasonReducer,
});

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      return appReducer(state, action);
    }
  }
};

export default rootReducer;
