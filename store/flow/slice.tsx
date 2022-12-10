import { createSlice } from "@reduxjs/toolkit";

interface StateFlow {
  list: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  isSuccess: boolean;
}

const initialState: StateFlow = {
  list: { first: "", second: "", third: "", fourth: "" },
  isSuccess: false,
};

const reducers = {
  getFlowString: (state: StateFlow) => {
    return {
      ...state,
    };
  },
  getFlowStringSuccess: (state: StateFlow, { payload: list }) => {
    return {
      list,
      isSuccess: true,
    };
  },
  init: (state: StateFlow) => {
    return initialState;
  },
};

const slice = createSlice({
  name: "flow",
  initialState,
  reducers,
});

export const flowName = slice.name;
export const flowReducer = slice.reducer;
export default slice.actions;
