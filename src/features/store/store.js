import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../slice/UserSlice"; 

const store = configureStore(
        {
            reducer:{ 
                authInfo: userSlice
            }, 
        }
    )
export default store;