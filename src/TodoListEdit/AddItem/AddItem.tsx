import React from 'react';
import {Button, Input, Select} from "antd";
import {Columns} from "../TodoListEdit";

interface AddItemInterface {
    newItemName : string|undefined,
    newItemColumn : string|undefined,
    columns : Columns[],
    handleOnItemNameChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnCategoryChange : (newValue: string) => void,
    handleOnClickNewItem : () => void,
}
const AddItem = (
    {newItemName, newItemColumn, columns, handleOnItemNameChange,
        handleOnCategoryChange, handleOnClickNewItem} : AddItemInterface
) => {
    return (
        <div className="todo-list-with-design-add-item">
            <Input
                placeholder="Item name"
                onChange={handleOnItemNameChange}
                value={newItemName}
            />

            <Select
                placeholder="Select column"
                onChange={handleOnCategoryChange}
                value={newItemColumn}
                options={columns}
            />

            <Button
                disabled={!newItemName?.length || !newItemColumn}
                onClick={handleOnClickNewItem}
            >
                Add Item
            </Button>
        </div>
    );
};

export default AddItem;