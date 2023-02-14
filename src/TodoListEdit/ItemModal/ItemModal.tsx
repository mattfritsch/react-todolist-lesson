import React from 'react';
import {Input, Modal, Select} from "antd";
import {Columns} from "../TodoListEdit";

interface ItemModalInterface {
    open : boolean;
    handleOk : () => void,
    handleCancel : () => void,
    newItemColumn: string|undefined,
    handleOnCategoryChange : (newValue: string) => void,
    columns : Columns[],

    newItemModal: string|undefined,
    handleOnItemModalNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    
}

const ItemModal = (
    {open, handleOk, handleCancel, newItemColumn, handleOnCategoryChange, columns,
        newItemModal, handleOnItemModalNameChange} : ItemModalInterface
) => {
    return (
        <>
            <Modal
                open={open}
                title="Edit item"
                onOk={handleOk}
                okText="Save"
                onCancel={handleCancel}
                className="todo-list-with-design-add-item"
            >
                <Input
                    placeholder="Item name"
                    onChange={handleOnItemModalNameChange}
                    value={newItemModal}
                />

                <Select
                    placeholder="Select column"
                    onChange={handleOnCategoryChange}
                    value={newItemColumn}
                    options={columns}
                />
            </Modal>
        </>
    );
};

export default ItemModal;