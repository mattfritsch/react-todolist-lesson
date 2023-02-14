import React from 'react';
import {List} from "antd";
import {Items, Columns} from "../TodoListEdit";
import Item from "./Item"
import Header from "./Header";


interface ColumnInterface{
    column : Columns,
    item : Items[],
    label : string,
    showItemModal : (column : Columns, item : Items) => void,
    handleOnDeleteItem: (id: string) => void,
    showColumnModal : (column: Columns) => void,
    handleOnDeleteColumn: (id: string) => void,
}
const Column = (
    {column, item, label, handleOnDeleteItem, handleOnDeleteColumn,
    showColumnModal, showItemModal} : ColumnInterface
) => {
    return (
        <List
            className="todo-list-with-design-column"
            header={<Header
                column={column}
                label={label}
                showColumnModal={showColumnModal}
                handleOnDeleteColumn={handleOnDeleteColumn}/>}
            dataSource={item}
            renderItem={(item) => (
                <Item
                    column={column}
                    item={item}
                    showItemModal={showItemModal}
                    handleOnDeleteItem={handleOnDeleteItem}
                />
            )}
        />
    );
};

export default Column;
