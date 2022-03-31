import React, { ReactElement } from 'react';

type TItemContactList = {
    name: string,
    surname: string,
    phone: string,
    id: string
}

class ItemListContact extends React.Component<TItemContactList> {
    render(): ReactElement {
        const { name, surname, phone } = this.props as TItemContactList;
        return (
            <li>
                <p className="name">{ name }</p>
                <p className="surname">{ surname }</p>
                <p className="phone">{ phone }</p>
                <button>delete contact</button>
            </li>
        )
    }
}

export { ItemListContact }
