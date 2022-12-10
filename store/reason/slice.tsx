import { createSlice } from "@reduxjs/toolkit";

interface StateReason {
  list: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  isSuccess: boolean;
}

const initialState: StateReason = {
  list: { first: "", second: "", third: "", fourth: "" },
  isSuccess: false,
};

const reducers = {
  getReasonString: (state: StateReason) => {
    return {
      ...state,
    };
  },
  getReasonStringSuccess: (state: StateReason, { payload: list }) => {
    return {
      list,
      isSuccess: true,
    };
  },
  init: (state: StateReason) => {
    return initialState;
  },
};

const slice = createSlice({
  name: "reason",
  initialState,
  reducers,
});

export const reasonName = slice.name;
export const reasonReducer = slice.reducer;
export default slice.actions;
