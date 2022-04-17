import {
    FormEventHandler,
    ChangeEventHandler,
    MouseEventHandler
} from "react"

export interface IContact {
    name: string,
    surname: string,
    phone: string,
    id?: string
}

export interface IDataContact {
    name: string,
    surname: string,
    phone: string,
    id: string
}

export interface IItemContactList {
    name: string,
    surname: string,
    phone: string,
    id: string
}

export interface IPropsListContact {
    contacts: Array<{
        name: string,
        surname: string,
        phone: string,
        id: string
    }>,
    stateViewForm: Function,
    deleteContact: Function,
    getDataItem: Function,
    resetUpdateData: Function
}

export interface IPropsForm {
    classForm: string,
    stateViewForm: Function,
    createNewContact: Function,
    updateContact: Function,
    dataChangeItem: Array<string>,
    isUpdateContact: boolean,
    id?: string,
    idUpdateItem: string
}

export interface IPropsItemContactList {
    name: string,
    surname: string,
    phone: string,
    id: string,
    deleteContact: Function,
    stateViewForm: Function,
    getDataItem: Function
}

export interface IUseContactsHook {
    listContacts: IDataContact[],
    stateViewForm: boolean,
    dataChangeItem: string[],
    isUpdateContact: boolean,
    idUpdateItem: string,
    deleteContact: Function,
    createNewContact: Function,
    updateContactOfList: Function,
    getDataItemForUpdateItem: Function,
    resetDataForUpdateItem: Function,
    showHideFormAddContact: Function
}

export interface IUseFormContactHook {
    name: string,
    surname: string,
    phone: string,
    viewFillFields: string,
    onChangeInput: ChangeEventHandler<HTMLInputElement>,
    onSubmitForm: FormEventHandler<HTMLFormElement>,
    canselInputData: MouseEventHandler<HTMLButtonElement>
}