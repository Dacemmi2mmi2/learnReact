import { ReactElement } from 'react';
import error from '../../img/error.png';
import './Error.css';

export const Error = (): ReactElement => {
    return (
        <div className='ErrorPage'>
            <p>Something went wrong</p>
            <img src={error} alt="error" />
        </div>
    );
}