import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { UsersPage } from '../pages/UsersPage';
import { CreateOrEditUserPage } from '../pages/CreateOrEditUserPage';

export const AdminPanel = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<DashboardPage /> }
            />
            <Route
                path='/users'
                element={<UsersPage /> }
            />
            <Route
                path='/createUser'
                element={<CreateOrEditUserPage />}
            />
            <Route
                path='/updateUser/:id'
                element={<CreateOrEditUserPage />}
            />
        </Routes>
    );
}