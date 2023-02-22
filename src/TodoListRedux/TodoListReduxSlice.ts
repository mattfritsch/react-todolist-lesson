import {createSlice} from "@reduxjs/toolkit";
import {Column, Item} from "./TodoListRedux";

interface State {
    columns : Column,
    items : Item,
    columnModal : Column,
    itemModal : Item
}
export const todoListReduxSlice = createSlice({
    name: 'todoListRedux',
    initialState: {
        columns : [],
        items : [],
        columnModal : null,
        itemModal : null
    },
    reducers: {
        setColumns: (state: {columns: Column[]}, action: { payload: Column[] }) => {
             state.columns = action.payload;
        },
        setItems: (state: {items: Item[]}, action: {payload: Item[] }) => {
            state.items = action.payload;
        },
        setColumnModal: (state: {columnModal: Column|null}, action: { payload: Column|null }) => {
            state.columnModal = action.payload;
        },
        setItemModal: (state: {itemModal: Item|null}, action: { payload: Item|null }) => {
            state.itemModal = action.payload;
        }
    }
});

export const { setColumns, setItems, setColumnModal, setItemModal } = todoListReduxSlice.actions;

export default todoListReduxSlice.reducer;