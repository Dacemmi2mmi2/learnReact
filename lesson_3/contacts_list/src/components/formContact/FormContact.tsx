import React, { ReactElement } from 'react';
import './FromContact.css';

class FormContact extends React.Component {
    render(): ReactElement {
        return <div className="FromContact__wrapper">
            <div className="title">
                <p>Field for add contact</p>
            </div>
            <form action="">
                <label htmlFor="">name</label>
                <input type="text" />
                <label htmlFor="">surname</label>
                <input type="text" />
                <label htmlFor="">phone</label>
                <input type="text" />
            </form>
            <div className="buttons_container">
                <button className="save">save contact</button>
                <button className="cancel">cancel input</button>
            </div>
        </div>
    }
}

export { FormContact }
