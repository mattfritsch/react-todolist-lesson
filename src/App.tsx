import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import TodoListBasic from './TodoListBasic';
import TodoListEdit from './TodoListEdit';
import TodoListWithDesign from './TodoListWithDesign';
import Example from "./Example/Example";
import MyExample from "./MyExample/MyExample";
import TodoListWrapper from "./TodoListRedux/TodoListWrapper";

const App = () => (
    <div className="app">
        <Navigation />
        <Routes>
            <Route path="/todo-list-basic" element={<TodoListBasic />} />
            <Route path="/todo-list-with-design" element={<TodoListWithDesign />} />
            <Route path="/todo-list-edit" element={<TodoListEdit />} />
            <Route path="/todo-list-redux" element={<TodoListWrapper />} />
            <Route path="/example" element={<Example />} />
            <Route path="/my-example" element={<MyExample />} />
            <Route path="*" element={<Navigate to="/todo-list-basic" />} />
        </Routes>
    </div>
);

export default App;
