import { ReactElement } from 'react';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';
import { useContacts } from './logic-contacts';
import { IUseContactsHook } from '../../servises/interfaces';

export const Contacts = (): ReactElement => {
    const {
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
    } = useContacts() as IUseContactsHook;

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
