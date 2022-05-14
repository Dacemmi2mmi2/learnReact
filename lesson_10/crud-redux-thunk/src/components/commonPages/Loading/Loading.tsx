import { ReactElement } from 'react';
import './Loading.css';

export const Loading = (): ReactElement => {
    return (
        <div className='LoadingPage'>
            <div className='container-loader'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}