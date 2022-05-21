import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToDoListPage } from '../Pages/ToDoListPage';

export const Pages = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<ToDoListPage />}
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