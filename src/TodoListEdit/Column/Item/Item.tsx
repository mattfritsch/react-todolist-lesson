import React from 'react';
import {Button, List} from "antd";
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import {Columns, Items} from "../../TodoListEdit";

interface ItemInterface{
    item : Items,
    column : Columns,
    showItemModal: (column : Columns, item : Items) => void,
    handleOnDeleteItem: (id: string) => void,
}
const Item = (
    {item, column, handleOnDeleteItem, showItemModal} : ItemInterface
) => {
    return (
        <List.Item className="todo-list-with-design-item">
            {item.label}
            <div>
                <Button
                    type="primary"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => showItemModal(column, item)}
                />
                <Button
                    type="primary"
                    danger
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={() => handleOnDeleteItem(item.id)}
                />
            </div>
        </List.Item>
    );
};

export default Item;