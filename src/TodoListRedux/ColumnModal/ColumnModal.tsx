import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Column } from '../TodoListRedux';
import {setColumnModal} from "../TodoListReduxSlice";
import {useDispatch} from "react-redux";

interface ColumnModalInterface {
    column: Column | undefined;
    onSaveColumn(newColumn: Column): void;
}

const ColumnModal = ({
    column,
    onSaveColumn,
}: ColumnModalInterface) => {
    const [newColumnName, setNewColumnName] = useState<string>();

    const dispatch = useDispatch();

    const handleOnCloseColumn = () => {
        dispatch(setColumnModal(null));
    };

    useEffect(() => {
        setNewColumnName(column?.label);
    }, [column]);

    const handleOnSave = () => {
        if (newColumnName && column) {
            onSaveColumn({
                ...column,
                label: newColumnName,
            });
        }

    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumnName(e.target.value);
    };

    return (
        <Modal
            title="Column edition"
            open={column !== null}
            onOk={handleOnSave}
            okText="Save"
            onCancel={handleOnCloseColumn}
            className="todo-list-redux-Column-modal"
        >
            <Input value={newColumnName} onChange={handleOnChange} />
        </Modal>
    );
};

export default ColumnModal;
