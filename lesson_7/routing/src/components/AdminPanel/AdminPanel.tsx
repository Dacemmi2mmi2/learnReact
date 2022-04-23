import { ReactElement } from 'react';
import { Dashboard } from '../Dashboard/Dashboard';
import { Users } from '../Users/Users';
import { Albums } from '../Albums/Albums';
import './AdminPanel.css';

export const AdminPanel = (): ReactElement => {
    return (
        <>
            {/* <Dashboard /> */}
            {/* <Users /> */}
            <Albums />
        </>
    )
}