import { ReactElement } from 'react';
import error from '../../../img/error.png';
import './ErrorPage.css';

export const ErrorPage = (): ReactElement => {
    return (
        <div className='ErrorPage'>
            <p>Something went wrong</p>
            <img src={error} alt="error" />
        </div>
    );
}