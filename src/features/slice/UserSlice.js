import { createSlice } from "@reduxjs/toolkit"; 
export const uerSlice =  createSlice({
    name:'Login',
    initialState: {
        login:null,
    },
    reducers:{
      loginUser: (state,action)=>{
        state.login = action.payload; 
        }
    },
});

export const {loginUser} = uerSlice.actions;
export default uerSlice.reducer;