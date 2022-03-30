import React, { ReactElement } from 'react';

class ItemListContact extends React.Component {
    render(): ReactElement {
        return (
            <li>
                <p className="name">name</p>
                <p className="surname">surname</p>
                <p className="phone">+1234556789098</p>
                <button>delete contact</button>
            </li>
        )
    }
}

export { ItemListContact }
