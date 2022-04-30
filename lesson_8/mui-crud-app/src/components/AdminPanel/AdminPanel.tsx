import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumsPage } from './AlbumsPage/AlbumsPage';
import { DashboardPage } from './DashboardPage/DashboardPage';
import { UserContent } from './UsersPage/UserContent/UserContent';
import { UsersPage } from './UsersPage/UsersPage';

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
                element={<UserContent />}
            />
            <Route
                path='/albums'
                element={<AlbumsPage /> }
            />
        </Routes>
    );
}