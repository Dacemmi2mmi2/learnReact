import React, { ReactElement } from 'react';

type TItemContactList = {
    name: string,
    surname: string,
    phone: string,
    id: string,
    deleteContact: Function,
    stateViewForm: Function,
    getDataItem: Function
}

class ItemListContact extends React.Component<TItemContactList> {
    render(): ReactElement {
        const {
            name,
            surname,
            phone,
            id,
            deleteContact,
            stateViewForm,
            getDataItem
        } = this.props as TItemContactList;
        return (
            <li>
                <p className="name">{ name }</p>
                <p className="surname">{ surname }</p>
                <p className="phone">{ phone }</p>
                <div className="buttons__item">
                    <button onClick={(): void => { deleteContact(id) }}>delete</button>
                    <button onClick={
                        (): void => {
                            stateViewForm();
                            getDataItem(name, surname, phone);
                        }
                    }>
                        edit
                    </button>
                </div>
            </li>
        )
    }
}

export { ItemListContact }
