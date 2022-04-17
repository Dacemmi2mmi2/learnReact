import { ReactElement } from 'react';
import {
    IItemContactList,
    IPropsListContact
} from '../../servises/interfaces';
import { ItemListContact } from './../itemListContact/ItemListContact';
import './ListContact.css';

export const ListContact = (props: IPropsListContact): ReactElement => {
    const {
        contacts,
        stateViewForm,
        deleteContact,
        getDataItem,
        resetUpdateData
    } = props as IPropsListContact;
    return (
        <div className="ListContact__wrapper">
            <div className="title">
                <p>List of contacts</p>
            </div>
            <ul className="list__contacts">
                {
                    contacts.map((item: IItemContactList): ReactElement => {
                        const { name, surname, phone, id } = item as IItemContactList;
                        return <ItemListContact
                            key={id}
                            name={name}
                            surname={surname}
                            phone={phone}
                            id={id}
                            deleteContact={deleteContact}
                            stateViewForm={stateViewForm}
                            getDataItem={getDataItem}
                        />
                    })
                }
            </ul>
            <button
                className="add__contact"
                onClick={
                    (): void => {
                        stateViewForm('add');
                        resetUpdateData();
                    }
                }
            >
                add contact
            </button>
        </div>
    )
}
