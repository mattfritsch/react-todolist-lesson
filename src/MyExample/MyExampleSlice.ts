import {createSlice} from "@reduxjs/toolkit";

export const myExampleSlice = createSlice({
    name: 'myExample',
    initialState: {
        name: 'Matthieu',
        select : 'blue'
    },
    reducers: {
        setName: (state: { name: string }, action : { payload: string }) => {
            state.name = action.payload
        },
        setSelect: (state: { select: string }, action : {payload: string}) => {
            state.select = action.payload
        }
    }
});

export const { setName, setSelect } = myExampleSlice.actions

export default myExampleSlice.reducer;