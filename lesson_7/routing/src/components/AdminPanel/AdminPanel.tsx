import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import { UsersPage } from '../UsersPage/UsersPage';
import { Albums } from '../Albums/Albums';
import './AdminPanel.css';

export const AdminPanel = (): ReactElement => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Dashboard />}
            />
            <Route
                path='/users'
                element={<UsersPage />}
            />
            <Route
                path='/albums'
                element={<Albums />}
            />
        </Routes>
    )
}