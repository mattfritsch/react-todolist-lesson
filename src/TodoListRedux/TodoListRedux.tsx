import React from 'react';
import AddColumn from './AddColumn/AddColumn';
import AddItem from './AddItem';
import ColumnComp from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import './TodoListRedux.css';
import {useDispatch, useSelector} from "react-redux";
import {setColumnModal, setColumns, setItemModal, setItems} from "./TodoListReduxSlice";

export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

const TodoListRedux = () => {

    const dispatch = useDispatch();
    const columns = useSelector((state: any) => state.todoListRedux.columns)
    const items = useSelector((state: any) => state.todoListRedux.items)
    const columnModal = useSelector((state: any) => state.todoListRedux.columnModal)
    const itemModal = useSelector((state: any) => state.todoListRedux.itemModal)

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId } : Item) => columnId === columnIdSelected);
    };

    const handleOnCloseItem = () => {
        dispatch(setItemModal(null));
    };

    const handleOnCloseColumn = () => {
        dispatch(setColumnModal(null));
    };

    const handleOnSaveItem = (newItem: Item) => {
        dispatch(
            setItems(
                items.map((item : Item) => (item.id === newItem.id ? newItem : item))
            )
        );
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
        dispatch(
            setColumns(
                columns.map((column : Column) =>
                    column.value === newColumn.value ? newColumn : column
                )
            )
        );
        handleOnCloseColumn();
    };

    return (
        <div className="todo-list-redux">
            <AddColumn />
            <AddItem />

            <div className="todo-list-redux-columns">
                {columns.map(({ value, label } : Column) => {
                    const columnItems = getColumnItems(value);

                    return (
                        <ColumnComp
                            value={value}
                            label={label}
                            columnItems={columnItems}
                        />
                    );
                })}
            </div>

            <ItemModal
                item={itemModal}
                onSaveItem={handleOnSaveItem}
                columns={columns}
            />

            <ColumnModal
                column={columnModal}
                onSaveColumn={handleOnSaveColumn}
            />
        </div>
    );
};

export default TodoListRedux;
