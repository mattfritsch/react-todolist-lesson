import { Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Column, Item } from '../TodoListRedux';
import {useDispatch} from "react-redux";
import {setItemModal} from "../TodoListReduxSlice";

interface ItemModalInterface {
    item: Item | undefined;
    columns: Column[];
    onSaveItem(newItem: Item): void;
}

const ItemModal = ({
    item,
    onSaveItem,
    columns,
}: ItemModalInterface) => {
    const [newItemName, setNewItemName] = useState<string>();
    const [newItemColumn, setNewItemColumn] = useState<string>();

    const dispatch = useDispatch();

    const handleOnCloseItem = () => {
        dispatch(setItemModal(null));
    };

    useEffect(() => {
        setNewItemName(item?.label);
        setNewItemColumn(item?.columnId);
    }, [item]);

    const handleOnSave = () => {
        if (newItemName && item && newItemColumn) {
            onSaveItem({
                ...item,
                label: newItemName,
                columnId: newItemColumn,
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    return (
        <Modal
            title="Item edition"
            open={item !== null}
            onOk={handleOnSave}
            okText="Save"
            onCancel={handleOnCloseItem}
            className="todo-list-redux-item-modal"
        >
            <Input value={newItemName} onChange={handleOnChange} />
            <Select
                placeholder="Select column"
                onChange={handleOnCategoryChange}
                value={newItemColumn}
                options={columns}
            />
        </Modal>
    );
};

export default ItemModal;
