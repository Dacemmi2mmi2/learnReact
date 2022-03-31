import React, { ReactElement } from 'react';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';
import {
    getContactsList,
    addNewContact,
    deleteItemContactList
} from './../../loaders/loaders';

type TPropsContact = {};
type TContact = {
    name: string,
    surname: string,
    phone: string,
    id?: string
}
type TStateContact = {
    listContacts: Array<{
        name: string,
        surname: string,
        phone: string,
        id: string
    }>,
    stateViewForm: boolean
};

class Contacts extends React.Component<TPropsContact, TStateContact> {
    private id: number = 0;
    constructor(props: TPropsContact) {
        super(props);
        this.state = {
            listContacts: [],
            stateViewForm: false
        }
        this.showHideFormAddContact = this.showHideFormAddContact.bind(this);
        this.updateContactsList = this.updateContactsList.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    showHideFormAddContact(): void {
        const { stateViewForm } = this.state as TStateContact;
        this.setState({ stateViewForm: !stateViewForm });
    }

    updateContactsList(contact: TContact): void {
        const { listContacts } = this.state as TStateContact;
        this.id = this.id + 1;
        contact.id = String(this.id);
        addNewContact(contact)
        .then((dataContact): void => {
            this.setState({ listContacts: [...listContacts, dataContact] });
        });
    }

    deleteContact(id: string): void {
        const { listContacts } = this.state as TStateContact;
        this.setState({
            listContacts: listContacts.filter(item => item.id !== id)
        });
        deleteItemContactList(id);
    }

    componentDidMount(): void {
        getContactsList()
        .then((dataContacts): void => {
            dataContacts.forEach((item): void => {
                this.id = this.id < Number(item.id) ? Number(item.id) : this.id;
            });
            this.setState({ listContacts: dataContacts });
        });
    }

    render(): ReactElement {
        const { listContacts, stateViewForm } = this.state as TStateContact;
        const classForm = stateViewForm ? 'FromContact__wrapper show' : 'FromContact__wrapper hide';
        return <>
            <ListContact 
                contacts={listContacts}
                stateViewForm={this.showHideFormAddContact}
                deleteContact={this.deleteContact}
            />
            <FormContact
                classForm={classForm}
                stateViewForm={this.showHideFormAddContact}
                updateContacts={this.updateContactsList}
            />
        </>
    }
}

export { Contacts }
