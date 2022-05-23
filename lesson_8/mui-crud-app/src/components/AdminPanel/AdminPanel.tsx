import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumsPage } from '../pages/AlbumsPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserContentPage } from '../pages/UserContentPage';
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
                path='/users/:id'
                element={<UserContentPage />}
            />
            <Route
                path='/albums'
                element={<AlbumsPage /> }
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