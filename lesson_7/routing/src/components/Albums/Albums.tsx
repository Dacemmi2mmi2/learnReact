import { ReactElement } from 'react';

export const Albums = (): ReactElement => {
    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Albums</h1>
            </div>
        </div>
    )
}