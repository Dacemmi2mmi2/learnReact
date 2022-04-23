import { ReactElement } from 'react';

export const Users = (): ReactElement => {
    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>Dashboard</li>
                    <li>Albums</li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Users</h1>
            </div>
        </div>
    )
}