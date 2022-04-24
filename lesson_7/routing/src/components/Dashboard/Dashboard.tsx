import { Link } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { getApi } from '../../services/loaders';
import { linkStyles } from '../../services/additionalStyles';
import './Dashboard.css';

export const Dashboard = (): ReactElement => {
    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>
                        <Link
                            to='/users'
                            style={linkStyles}
                        >
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/albums'
                            style={linkStyles}
                        >
                            Albums
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Dashboard</h1>
            </div>
        </div>
    )
}