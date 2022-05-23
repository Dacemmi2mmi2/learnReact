import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = (): ReactElement => {
    return (
        <Link to={'/users'}>Users</Link>
    );
}