import { ReactElement } from 'react';

type TPropsItemContactList = {
    name: string,
    surname: string,
    phone: string,
    id: string,
    deleteContact: Function,
    stateViewForm: Function,
    getDataItem: Function
}

const ItemListContact = (props: TPropsItemContactList): ReactElement => {
    const {
        name,
        surname,
        phone,
        id,
        deleteContact,
        stateViewForm,
        getDataItem
    } = props as TPropsItemContactList;
    return (
        <li id={id}>
            <p className="name">{ name }</p>
            <p className="surname">{ surname }</p>
            <p className="phone">{ phone }</p>
            <div className="buttons__item">
                <button onClick={(): void => { deleteContact(id) }}>delete</button>
                <button onClick={
                    (): void => {
                        stateViewForm('update');
                        getDataItem(name, surname, phone, id);
                    }
                }>
                    edit
                </button>
            </div>
        </li>
    )
}

export { ItemListContact }
