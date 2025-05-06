import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';
import { loginRequset } from './requsetThunks';

type UserInfo = {loading:boolean, error:string|null, user:{id?:number, username?:string, password?:string} | null} 
type UserInfoKey = keyof UserInfo;

/**
 * Slice
 */
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading:false,
    error:null,
    user:null
  } as UserInfo,
  reducers: {
    addUser(state, action: PayloadAction<UserInfo>) {
      return {...action.payload};
    },
    resetUser(state, action: PayloadAction<UserInfo>) {
      return {
        loading:false,
        error:null,
        user:null
      }
    }
  },
  extraReducers(builder) {
      builder.addCase(loginRequset.pending,(state, action)=>{
        console.log('pending')
        state.loading = true;
        state.error = null; // 重置错误状态
      }).addCase(loginRequset.fulfilled,(state, action)=>{
        console.log('fulfilled')
        state.loading = false;
        state.error = null; // 重置错误状态
        state.user = action.payload
      }).addCase(loginRequset.rejected,(state, action)=>{
        console.log('rejected')
        state.loading = false;
        state.error = action.payload;//重置错误状态
        state.user = null
      })
  },
});

/**
 * Actions
 */

export const { addUser, resetUser } = userSlice.actions;

/**
 * Selectors
 */
export const getUserState = (state: ReduxState) => state.user;

export default userSlice.reducer;
