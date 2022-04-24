import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { linkStyles } from '../../services/additionalStyles';

export const Albums = (): ReactElement => {
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
                            to='/users'
                            style={linkStyles}
                        >
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Albums</h1>
            </div>
        </div>
    )
}