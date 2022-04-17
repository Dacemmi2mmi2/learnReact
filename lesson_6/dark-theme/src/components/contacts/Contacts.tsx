import { ReactElement } from 'react';
import { ThemeContext } from '../../servises/context';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';
import { useContacts } from './logic-contacts';
import { IUseContactsHook } from '../../servises/interfaces';

export const Contacts = (): ReactElement => {
    const {
        context,
        listContacts,
        stateViewForm,
        dataChangeItem,
        isUpdateContact,
        idUpdateItem,
        changeContext,
        deleteContact,
        createNewContact,
        updateContactOfList,
        getDataItemForUpdateItem,
        resetDataForUpdateItem,
        showHideFormAddContact
    } = useContacts() as IUseContactsHook;
    
    const classForm = stateViewForm ? 'FromContact__page show' : 'FromContact__page hide';

    return (
        <ThemeContext.Provider value={context}>
            <ListContact
                changeContext={changeContext}
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
        </ThemeContext.Provider>
    );
}
