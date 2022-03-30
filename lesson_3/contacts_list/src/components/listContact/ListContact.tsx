import React, { ReactElement } from 'react';
import { ItemListContact } from './../itemListContact/ItemListContact';
import './ListContact.css';

class ListContact extends React.Component {
    render(): ReactElement {
        return <div className="ListContact__wrapper">
            <div className="title">
                <p>List of contacts</p>
            </div>
            <ul className="list__contacts">
                <ItemListContact />
            </ul>
            <button className="add__contact">add contact</button>
        </div>
    }
}

export { ListContact }
