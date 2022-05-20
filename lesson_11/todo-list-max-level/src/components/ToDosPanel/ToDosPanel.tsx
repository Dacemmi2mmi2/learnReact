import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToDoList } from '../ToDoList/TodoList';

export const ToDosPanel = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<ToDoList />}
            />
            <Route 
                path='/form'
            />
            <Route 
                path='/form/:id'
            />
        </Routes>
    );
}