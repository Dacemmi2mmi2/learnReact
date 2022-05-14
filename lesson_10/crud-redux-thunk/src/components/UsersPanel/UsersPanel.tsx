import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormUserPage } from './FormUserPage/FormUserPage';
import { UsersPage } from './UsersPage/UsersPage';

export const UsersPanel = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<UsersPage />}
            />
            <Route
                path='/form'
                element={<FormUserPage />}
            />
            <Route
                path='/from:id'
                element={<FormUserPage />}
            />
        </Routes>
    );
}