import React, {useState} from 'react';
import './TodoListBasic.css';

const options = ['To do', 'In progress', 'Done']
const TodoListBasic = () => {
    const [task, setTask] = useState<string>();
    const [option, setOption] = useState<string>(options[0]);
    const [listToDo, setListToDo] = useState<string[]>([]);
    const [listInProgress, setListInProgress] = useState<string[]>([]);
    const [listDone, setListDone] = useState<string[]>([]);

    function handleClick() {
        if (task != null) {
            switch (option) {
                case options[0]:
                    setListToDo([...listToDo, task]);
                    break;
                case options[1]:
                    setListInProgress([...listInProgress, task]);
                    break;
                case options[2]:
                    setListDone([...listDone, task]);
                    break;
                default:
                    break;
            }
        }
        setTask("");
    }

    function handleChangeTask(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value);
    }

    function handleChangeOption(e: React.ChangeEvent<HTMLSelectElement>) {
        setOption(e.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" value={task} onChange={handleChangeTask} className="form"/>
                <select defaultValue={options[0]} onChange={handleChangeOption} className="form">
                    {
                        options.map(items => (
                            <option value={items}>{items}</option>
                        ))
                    }
                </select>
                <button type="submit" onClick={handleClick} className="form">Add to list</button>
            </div>
            <table>
                <td className="td">
                    <tr>{options[0]}</tr>
                    {
                        listToDo.map(task => (
                            <tr key={task}>{task}</tr>
                        ))
                    }
                </td>
                <td className="td">
                    <tr>{options[1]}</tr>
                    {
                        listInProgress.map(task => (
                            <tr key={task}>{task}</tr>
                        ))
                    }
                </td>
                <td className="td">
                    <tr>{options[2]}</tr>
                    {
                        listDone.map(task => (
                            <tr key={task}>{task}</tr>
                        ))
                    }
                </td>
            </table>
        </div>
    );
};

export default TodoListBasic;
