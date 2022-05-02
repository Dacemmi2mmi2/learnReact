import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumsPage } from './AlbumsPage/AlbumsPage';
import { DashboardPage } from './DashboardPage/DashboardPage';
import { UserContentPage } from './UsersPage/UserContentPage/UserContentPage';
import { UsersPage } from './UsersPage/UsersPage';
import { FormPage } from './FormPage/FromPage';

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
                element={<FormPage />}
            />
            <Route
                path='/updateUser/:id'
                element={<FormPage />}
            />
        </Routes>
    );
}