import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { linkStyles } from '../../services/additionalStyles';
import  dashboard  from '../../images/bg_dashboard.png'
import './DashboardPage.css';

export const DashboardPage = (): ReactElement => {
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
                <div className="data__page">
                    <img
                        className='bg__dashboard'
                        src={dashboard}
                        alt="dashboard"
                    />
                </div>
            </div>
        </div>
    );
}