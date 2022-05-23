import { ReactElement } from 'react';
import './LoadingPage.css';

export const LoadingPage = (): ReactElement => {
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