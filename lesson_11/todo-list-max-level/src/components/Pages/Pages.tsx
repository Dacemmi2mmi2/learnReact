import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToDoListPage } from '../Pages/ToDoListPage';
import { FormTodoItemPage } from '../Pages/FormTodoItemPage';

export const Pages = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<ToDoListPage />}
            >
                <Route
                    path='form'
                    element={<FormTodoItemPage />}
                />
            </Route>
        </Routes>
    );
}