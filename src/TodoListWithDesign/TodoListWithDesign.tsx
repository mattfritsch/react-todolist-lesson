import React, {useState} from 'react';
import {Button, Divider, Input, List, Select} from "antd";
import './TodoListWithDesign.css'
import {DeleteOutlined} from "@ant-design/icons";

interface ListItem {
    id: string;
    label: string;
    typeList: string;
}

const TodoListWithDesign = () => {
    const {Option} = Select

    const [listCategory, setListCategory] = useState<Array<string>>([]);
    const [listItems, setListItems] = useState<ListItem[]>([]);


    const [newItemName, setNewItemName] = useState<string>('');
    const [newColumnName, setNewColumnName] = useState<string>('');
    const [newItemCategory, setNewItemCategory] = useState<string>('');

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumnName(e.target.value);
    }

    const handleOnCategoryChange = (value: string) => {
        setNewItemCategory(value);
    };

    const handleOnClickItem = () => {
        const newItem = {
            id: randomId(),
            label: newItemName,
            typeList: newItemCategory
        };

        setListItems([...listItems, newItem])

        setNewItemName('');
        setNewItemCategory(' ');
    };

    const handleOnClickColumn = () => {
        if(!listCategory.includes(newColumnName)){
            setListCategory([...listCategory, newColumnName])
        }

        setNewColumnName('')
    }

    const deleteItems = (id : string) => {
        const newItemList = listItems.filter((item) => item.id !== id);
        setListItems(newItemList);
    }

    return (
        <div className="todo-list-designed">
            <div className="todo-list-designed-add">
                <div className="todo-list-designed-add-column">
                    <Input
                        placeholder='Column name'
                        onChange={handleOnColumnNameChange}
                        value={newColumnName}
                    />
                    <Button
                        disabled={!newColumnName.length}
                        onClick={handleOnClickColumn}
                    >
                        Add Column
                    </Button>
                </div>
                <div className="todo-list-designed-add-item">
                    <Input
                        placeholder='Item name'
                        onChange={handleOnNameChange}
                        value={newItemName}
                    />
                    <Select
                        placeholder='Select column'
                        value={newItemCategory}
                        style={{width: 250}}
                        onChange={handleOnCategoryChange}
                    >
                    {listCategory.map(category => (
                            <Option key={category}>{category}</Option>
                        ))
                    }
                    </Select>
                    <Button
                        disabled={!newItemName.length}
                        onClick={handleOnClickItem}
                    >
                        Add Item
                    </Button>
                </div>
            </div>

            <div className="todo-list-designed-columns">
                    {
                        listCategory.map(category => (
                            <>
                                <div className="todo-list-designed-column">
                                    <Divider orientation='left'>{category}</Divider>
                                    <List
                                        bordered
                                        style={{width: 250}}
                                    >
                                        {
                                            listItems.map(({ id, label, typeList}) => {
                                                if(typeList === category){
                                                    return <div>
                                                        <List.Item
                                                            actions={[
                                                                <Button
                                                                    danger
                                                                    onClick={() => deleteItems(id)}
                                                                    shape="circle"
                                                                    icon={<DeleteOutlined/>}
                                                                />
                                                            ]}
                                                        >
                                                            <div>{label}</div>
                                                        </List.Item>
                                                    </div>
                                                }
                                            })
                                        }
                                    </List>
                                </div>
                            </>
                        ))
                    }
            </div>
        </div>
    );
};

export default TodoListWithDesign;
