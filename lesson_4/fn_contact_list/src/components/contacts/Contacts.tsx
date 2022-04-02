import {
    ReactElement,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';
import {
    getContactsList,
    updateContact,
    addNewContact,
    deleteItemContactList
} from './../../loaders/loaders';

type TContact = {
    name: string,
    surname: string,
    phone: string,
    id?: string
}

const Contacts = (): ReactElement => {
    const [listContacts, setListContacts] = useState([] as any[]);
    const [stateViewForm, setStateViewForm] = useState(false);
    const [dataChangeItem, setDataChangeItem] = useState([] as any[]);
    const [isUpdateContact, setIsUpdateContact] = useState(false);
    const [idUpdateItem, setIdUpdateItem] = useState('');

    const showHideFormAddContact = (stateContact: string): void =>{
        const updateContact = stateContact === 'update' ? true : false;
        setStateViewForm(!stateViewForm);
        setIsUpdateContact(updateContact);
    }

    const resetDataForUpdateItem = (): void => {
        setDataChangeItem([]);
    }

    const getDataItemForUpdateItem = (...args: Array<string>): void => {
        setDataChangeItem([...args] as SetStateAction<any[]>);
        setIdUpdateItem(args[args.length - 1]);
    }

    const updateContactOfList = (contact: TContact): void => {
        updateContact(contact, (contact.id as string))
        .then((dataUpdate): void => {
            setListContacts(listContacts.map(item => item.id !== dataUpdate.id ? item : dataUpdate));
        });
    }

    let id: number;
    const createNewContact = (contact: TContact): void => {
        id = id + 1;
        contact.id = String(id);
        addNewContact(contact)
        .then((dataContact): void => {
            setListContacts([...listContacts, dataContact]);
        });
    }

    const deleteContact = (id: string): void => {
        setListContacts(listContacts.filter(item => item.id !== id));
        deleteItemContactList(id);
    }

    const setId = (arrContacts: Array<TContact>): void => {
        id = arrContacts.reduce((acc, item): number => acc < Number(item.id) ? Number(item.id) : acc, 0);
    }

    useEffect((): void => {
        getContactsList()
        .then((dataContacts): void => {
            setId(dataContacts)
            setListContacts(dataContacts as SetStateAction<any[]>);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classForm = stateViewForm ? 'FromContact__page show' : 'FromContact__page hide';
    return (
        <>
            <ListContact 
                contacts={listContacts}
                stateViewForm={showHideFormAddContact}
                deleteContact={deleteContact}
                getDataItem={getDataItemForUpdateItem}
                resetUpdateData={resetDataForUpdateItem}
            />
            <FormContact
                classForm={classForm}
                stateViewForm={showHideFormAddContact}
                createNewContact={createNewContact}
                updateContact={updateContactOfList}
                dataChangeItem={dataChangeItem}
                isUpdateContact={isUpdateContact}
                idUpdateItem={idUpdateItem}
            />
        </>
    );
}

export { Contacts }
