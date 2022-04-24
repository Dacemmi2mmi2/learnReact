import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../DashboardPage/DashboardPage';
import { UsersPage } from '../UsersPage/UsersPage';
import { AlbumsPage } from '../AlbumsPage/AlbumsPage';
import './AdminPanel.css';

export const AdminPanel = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<DashboardPage />}
            />
            <Route
                path='/users'
                element={<UsersPage />}
            />
            <Route
                path='/albums'
                element={<AlbumsPage />}
            />
        </Routes>
    );
}