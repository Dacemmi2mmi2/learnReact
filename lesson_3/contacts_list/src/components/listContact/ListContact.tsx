import React, { ReactElement } from 'react';
import { ItemListContact } from './../itemListContact/ItemListContact';
import './ListContact.css';

type TItemContactList = {
    name: string,
    surname: string,
    phone: string,
    id: string
}

type TPropsListContact = {
    contacts: Array<{
        name: string,
        surname: string,
        phone: string,
        id: string
    }>,
    stateViewForm: Function
}

class ListContact extends React.Component<TPropsListContact> {
    render(): ReactElement {
        const { contacts, stateViewForm } = this.props as TPropsListContact;
        return <div className="ListContact__wrapper">
            <div className="title">
                <p>List of contacts</p>
            </div>
            <ul className="list__contacts">
                {
                    contacts.map((item: TItemContactList): ReactElement => {
                        const { name, surname, phone, id } = item as TItemContactList;
                        return <ItemListContact
                            key={id}
                            name={name}
                            surname={surname}
                            phone={phone}
                            id={id}
                        />
                    })
                }
            </ul>
            <button
                className="add__contact"
                onClick={(): void => stateViewForm()}
            >
                add contact
            </button>
        </div>
    }
}

export { ListContact }
