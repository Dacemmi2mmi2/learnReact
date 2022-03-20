import React, { ReactElement } from 'react';
import './Header.css';

class Header extends React.Component {
    render(): ReactElement {
        return <>
            <header className="Header">
                <p>My To Do List</p>
            </header>
        </>
    }
}

export { Header }