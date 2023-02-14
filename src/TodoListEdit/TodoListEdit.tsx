import React, { useState } from 'react';
import './TodoListEdit.css';
import AddColumn from "./AddColumn";
import AddItem from "./AddItem";
import ColumnModal from "./ColumnModal";
import ItemModal from "./ItemModal";
import Column from "./Column"

export interface Columns {
    value: string;
    label: string;
}

export interface Items {
    id: string;
    columnId: string;
    label: string;
}

const TodoListEdit = () => {
    const [columns, setColumns] = useState<Columns[]>([]);
    const [items, setItems] = useState<Items[]>([]);
    const [newItemName, setNewItemName] = useState<string>('');
    const [newColumnName, setColumnName] = useState<string>();
    const [newItemColumn, setNewItemColumn] = useState<string>();

    const [openColumnModal, setOpenColumnModal] = useState(false);
    const [newColumnModal, setColumnNameModal] = useState<string>();
    const [selectedColumnModal, setSelectedColumnModal] = useState<Columns>();

    const [openItemModal, setOpenItemModal] = useState(false);
    const [newItemModal, setItemNameModal] = useState<string>();
    const [selectedItemModal, setSelectedItemModal] = useState<Items>();

    const randomId = () => (Math.random() + 1).toString(36).substring(7);

    const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    const handleOnClickNewColumn = () => {
        if (newColumnName) {
            const newColumn = {
                value: randomId(),
                label: newColumnName,
            };

            setColumns([...columns, newColumn]);
            setColumnName(undefined);
        }
    };

    const handleOnClickNewItem = () => {
        if (newItemColumn) {
            const newItem = {
                id: randomId(),
                label: newItemName,
                columnId: newItemColumn,
            };

            setItems([...items, newItem]);

            setNewItemName('');
            setNewItemColumn(undefined);
        }
    };

    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }) => columnId === columnIdSelected);
    };

    const handleOnDeleteColumn = (idToRemove : string) => {
        setColumns(columns.filter(({value}) => value !== idToRemove));
        const thisItems = getColumnItems(idToRemove);
        const newItems : Items[] = []
        items.forEach(function (item){
           if(!thisItems.includes(item)){
               newItems.push(item)
           }
        });
        setItems(newItems);
    }

    const handleOnDeleteItem = (idToRemove: string) => {
        setItems(items.filter(({ id }) => id !== idToRemove));
    };

    const handleOnColumnNameModalChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnNameModal(e.target.value);
    }

    const showColumnModal = (column: Columns) => {
        setSelectedColumnModal(column);
        setColumnNameModal(column.label);
        setOpenColumnModal(true);
    };

    const handleOkColumn = () => {
        if(newColumnModal){
            const columnToEdit = columns.findIndex((column => column === selectedColumnModal))
            columns[columnToEdit].label = newColumnModal;
            setColumns(columns);
            setOpenColumnModal(false);
        }
    };

    const handleCancelColumn = () => {
        setOpenColumnModal(false);
    };

    const handleOnItemNameModalChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setItemNameModal(e.target.value);
    }

    const showItemModal = (column: Columns, item: Items) => {
        setSelectedColumnModal(column)
        setItemNameModal(item.label);
        setSelectedItemModal(item);
        setOpenItemModal(true);
    };

    const handleOkItem = () => {
        if(newItemModal && newItemColumn){
            const itemColumnToEdit = columns.findIndex((column => column.value === newItemColumn));
            const itemToEdit = items.findIndex((item => item === selectedItemModal));
            items[itemToEdit].label = newItemModal;
            items[itemToEdit].columnId = columns[itemColumnToEdit].value;
            setItems(items);
            setOpenItemModal(false);
        }
    };

    const handleCancelItem = () => {
        setOpenItemModal(false);
    };

    return (
        <div className="todo-list-with-design">
            <AddColumn
                newColumnName={newColumnName}
                handleOnColumnNameChange={handleOnColumnNameChange}
                handleOnClickNewColumn={handleOnClickNewColumn}
            />

            <AddItem
                newItemName={newItemName}
                newItemColumn={newItemColumn}
                columns={columns}
                handleOnItemNameChange={handleOnItemNameChange}
                handleOnCategoryChange={handleOnCategoryChange}
                handleOnClickNewItem={handleOnClickNewItem}
                />

            <div className="todo-list-with-design-columns">
                {columns.map((column) => {
                    const columnItems = getColumnItems(column.value);

                    return (
                        <Column
                            column={column}
                            key={column.value}
                            item={columnItems}
                            label={column.label}
                            showColumnModal={showColumnModal}
                            showItemModal={showItemModal}
                            handleOnDeleteColumn={handleOnDeleteColumn}
                            handleOnDeleteItem={handleOnDeleteItem}
                        />
                    );
                })}
                <ColumnModal
                    open={openColumnModal}
                    handleOk={handleOkColumn}
                    handleCancel={handleCancelColumn}
                    columnNameModal={newColumnModal}
                    handleOnColumnNameModalChange={handleOnColumnNameModalChange}
                />
                <ItemModal
                    open={openItemModal}
                    handleOk={handleOkItem}
                    handleCancel={handleCancelItem}
                    newItemModal={newItemModal}
                    handleOnItemModalNameChange={handleOnItemNameModalChange}
                    newItemColumn={newItemColumn}
                    columns={columns}
                    handleOnCategoryChange={handleOnCategoryChange}
                />
            </div>
        </div>
    );
};

export default TodoListEdit;
