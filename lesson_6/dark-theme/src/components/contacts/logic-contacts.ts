import {
    useState,
    useEffect,
    SetStateAction
} from 'react';
import {
    getContactsList,
    updateContact,
    addNewContact,
    deleteItemContactList
} from '../../servises/loaders';
import {
    IContact,
    IDataContact, 
    IUseContactsHook
} from '../../servises/interfaces';

export const useContacts = (): IUseContactsHook => {
    const [listContacts, setListContacts] = useState([] as IDataContact[]);
    const [stateViewForm, setStateViewForm] = useState(false);
    const [dataChangeItem, setDataChangeItem] = useState([] as string[]);
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

    const getDataItemForUpdateItem = (...args: string[]): void => {
        setDataChangeItem([...args] as SetStateAction<string[]>);
        setIdUpdateItem(args[args.length - 1]);
    }

    const updateContactOfList = (contact: IContact): void => {
        updateContact(contact, (contact.id as string))
            .then((dataUpdate): void => {
                setListContacts(listContacts.map(item => item.id !== dataUpdate.id ? item : dataUpdate));
            });
    }

    const createNewContact = (contact: IContact): void => {
        addNewContact(contact)
            .then((dataContact): void => {
                setListContacts([...listContacts, dataContact]);
            });
    }

    useEffect((): void => {
        getContactsList()
            .then((dataContacts): void => {
                setListContacts(dataContacts as SetStateAction<IDataContact[]>);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteContact = (id: string): void => {
        setListContacts(listContacts.filter(item => item.id !== id));
        deleteItemContactList(id);
    }

    return {
        listContacts,
        stateViewForm,
        dataChangeItem,
        isUpdateContact,
        idUpdateItem,
        deleteContact,
        createNewContact,
        updateContactOfList,
        getDataItemForUpdateItem,
        resetDataForUpdateItem,
        showHideFormAddContact
    };
}