import React from 'react';
import {Button, Input} from "antd";

interface AddColumnInterface {
    newColumnName : string|undefined,
    handleOnColumnNameChange :  (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnClickNewColumn : () => void
}

const AddColumn = (
    {newColumnName, handleOnColumnNameChange, handleOnClickNewColumn} : AddColumnInterface
) => {
    return (
        <div className="todo-list-with-design-add-column">
            <Input
                placeholder="Column name"
                onChange={handleOnColumnNameChange}
                value={newColumnName}
            />

            <Button
                disabled={!newColumnName?.length}
                onClick={handleOnClickNewColumn}
            >
                Add column
            </Button>
        </div>
    );
};

export default AddColumn;
