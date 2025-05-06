import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

type AddMinusInfo = {value1:number, value2:number}
type AddMinusKey = keyof AddMinusInfo;

/**
 * Slice
 */
const addMinusSlice = createSlice({
  name: 'addMinusInfo',
  initialState: {
    value1: 0, // 加法专用
    value2:100 // 减法专用
  } as AddMinusInfo,
  reducers: {
    add(state, action: PayloadAction<number>) {
      return {...state, value1:state.value1 + action.payload};
    },
    minus(state, action: PayloadAction<number>) {
      return {...state, value2:state.value2 - action.payload};
    }
  },
  extraReducers(builder) {
      builder.addCase(addMinusSlice.actions.add,(state, action)=>{
        
      })
  },
});

/**
 * Actions
 */

export const { add, minus } = addMinusSlice.actions;

/**
 * Selectors
 */
export const addMinusType = (state: ReduxState) => state.addMinus;

export default addMinusSlice.reducer;
