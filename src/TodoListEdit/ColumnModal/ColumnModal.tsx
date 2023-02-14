import React from 'react';
import {Input, Modal} from "antd";

export interface ColumnModalInterface {
    open : boolean;
    handleOk : () => void,
    handleCancel : () => void,
    columnNameModal : string|undefined,
    handleOnColumnNameModalChange : (e: React.ChangeEvent<HTMLInputElement>) => void

}

const ColumnModal = (
    {open, handleOk, handleCancel, columnNameModal, handleOnColumnNameModalChange} : ColumnModalInterface
) => {
    return (
        <>
            <Modal
                open={open}
                title="Edit column"
                onOk={handleOk}
                okText="Save"
                onCancel={handleCancel}
            >
                <Input
                    value={columnNameModal}
                    onChange={handleOnColumnNameModalChange}
                />
            </Modal>
        </>
    );
};

export default ColumnModal;