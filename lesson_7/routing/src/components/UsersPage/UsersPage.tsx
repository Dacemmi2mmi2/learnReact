import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { User } from '../User/User';
import { useUsers } from './usersPageHook';
import {
    IUserData,
    IUsersPageHook
} from '../../services/interfaces';
import { linkStyles } from '../../services/additionalStyles';

export const UsersPage = (): ReactElement => {
    const { listUsers } = useUsers() as IUsersPageHook;

    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>
                        <Link
                            to='/'
                            style={linkStyles}
                        >
                            Dashboard
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
                <h1 className='title__page'>Users</h1>
                <div className="data__page">
                    {
                        listUsers.map((item: IUserData, index: number): ReactElement => {
                            return (
                                <User
                                    key={index}
                                    dataUser={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}