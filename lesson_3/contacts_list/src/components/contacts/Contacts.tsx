import React, { ReactElement } from 'react';
import { FormContact } from '../formContact/FormContact';
import { ListContact } from './../listContact/ListContact';
import { getContactsList } from './../../loaders/loaders';

type TPropsContact = {};
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
    constructor(props: TPropsContact) {
        super(props);
        this.state = {
            listContacts: [],
            stateViewForm: false
        }
        this.showHideFormAddContact = this.showHideFormAddContact.bind(this);
    }

    showHideFormAddContact(): void {
        const { stateViewForm } = this.state as TStateContact;
        this.setState({ stateViewForm: !stateViewForm });
    }

    componentDidMount(): void {
        getContactsList()
        .then((dataContacts): void => {
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
            />
            <FormContact
                classForm={classForm}
                stateViewForm={this.showHideFormAddContact}
            />
        </>
    }
}

export { Contacts }
