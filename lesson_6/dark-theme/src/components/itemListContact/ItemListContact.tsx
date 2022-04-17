import { ReactElement } from 'react';
import { IPropsItemContactList } from '../../servises/interfaces';

export const ItemListContact = (props: IPropsItemContactList): ReactElement => {
    const {
        name,
        surname,
        phone,
        id,
        deleteContact,
        stateViewForm,
        getDataItem
    } = props as IPropsItemContactList;
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