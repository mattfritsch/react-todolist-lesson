import {configureStore} from "@reduxjs/toolkit";
import myExampleReducer from './MyExampleSlice'
export default configureStore({
    reducer:{
        myExample : myExampleReducer,
    }
})