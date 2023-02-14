import React from 'react';
import {Button} from "antd";
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import {Columns} from "../../TodoListEdit";

interface HeaderInterface {
    column : Columns,
    label : string,
    handleOnDeleteColumn: (id: string) => void,
    showColumnModal: (column : Columns) => void
}

const Header = (
    {column, label, handleOnDeleteColumn, showColumnModal} : HeaderInterface
) => {
    return (
        <div className="header-column-items">
            <p>{label}</p>
            <div className="header-buttons">
                <Button
                    type="primary"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => showColumnModal(column)}
                />
                <Button
                    type="primary"
                    danger
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={() => handleOnDeleteColumn(column.value)}
                />
            </div>
        </div>
    );
};

export default Header;