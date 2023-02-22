import React from 'react';
import { List } from 'antd';
import {Column, Item} from '../TodoListRedux';
import ItemComp from './Item';
import Header from './Header';
import {setColumnModal, setColumns, setItemModal, setItems} from "../TodoListReduxSlice";
import {useDispatch, useSelector} from "react-redux";

interface ColumnInterface {
    value: string,
    label: string,
    columnItems: Item[]
}

const ColumnComp = ({
    value,
    label,
    columnItems
}: ColumnInterface) => {

    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.todoListRedux.items)
    const columns = useSelector((state: any) => state.todoListRedux.columns)

    const handleOnDeleteColumn = (idToRemove: string) => {
        dispatch(setColumns(columns.filter(({ value } : Column) => value !== idToRemove)));
        dispatch(setItems(items.filter(({ columnId }: Item) => columnId !== idToRemove)));
    };

    const handleOnEditItem = (idItem: string) => {
        const item = items.find(({ id } : Item) => id === idItem);

        if (item) {
            dispatch(setItemModal(item));
        }
    };

    const handleOnEditColumn = (idColumn: string) => {
        const column = columns.find(({ value }: Column) => value === idColumn);

        if (column) {
            dispatch(setColumnModal(column));
        }
    };

    const handleOnDeleteItem = (idToRemove: string) => {
        dispatch(setItems(items.filter(({ id } : Item) => id !== idToRemove)));
    };

    return (
        <List
            className="todo-list-redux-column"
            key={value}
            header={
                <Header
                    label={label}
                    onEditColumn={() => handleOnEditColumn(value)}
                    onDeleteColumn={() => handleOnDeleteColumn(value)}
                />
            }
            dataSource={columnItems}
            renderItem={({ label: itemLabel, id }: Item) => (
                <ItemComp
                    label={itemLabel}
                    id={id}
                    onDeleteItem={() => handleOnDeleteItem(id)}
                    onEditItem={() => handleOnEditItem(id)}
                />
            )}
        />
    );
};

export default ColumnComp;
