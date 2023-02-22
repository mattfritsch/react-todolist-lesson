import {configureStore} from "@reduxjs/toolkit";
import todoListReduxReducer from "./TodoListReduxSlice"
export default configureStore({
    reducer: {
        todoListRedux: todoListReduxReducer
    }
})