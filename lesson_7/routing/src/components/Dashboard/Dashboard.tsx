import { ReactElement } from 'react';
import './Dashboard.css';

export const Dashboard = (): ReactElement => {
    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>Users</li>
                    <li>Albums</li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Dashboard</h1>
            </div>
        </div>
    )
}