import React, { ChangeEvent, ReactElement } from 'react';
import './FromContact.css';

type TPropsForm = {
    classForm: string,
    stateViewForm: Function,
    createNewContact: Function,
    updateContact: Function,
    dataChangeItem: Array<string>,
    isUpdateContact: boolean,
    id?: string,
    idUpdateItem: string
}

type TStateForm = {
    name: string,
    surname: string,
    phone: string,
    viewFillFields: string
}

class FormContact extends React.Component<TPropsForm> {
    constructor(props: TPropsForm) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            phone: '',
            viewFillFields: "none"
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.canselInputData = this.canselInputData.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();
        const {
            createNewContact,
            updateContact,
            isUpdateContact,
            dataChangeItem,
            idUpdateItem
        } = this.props as TPropsForm;
        const { name, surname, phone } = this.state as TStateForm;
        if (name && surname && phone) {
            !isUpdateContact && createNewContact({
                name: name,
                surname: surname,
                phone: phone
            });
            isUpdateContact && updateContact({
                name: name,
                surname: surname,
                phone: phone,
                id: idUpdateItem
            })
            this.setState({
                name: '',
                surname: '',
                phone: '',
                viewFillFields: "none"
            });
            dataChangeItem.length = 0;
        } else {
            this.setState({ viewFillFields: "block" });
        }
    }

    onChangeInput({ target }: ChangeEvent<HTMLInputElement>): void {
        const { classList, value } = target;
        this.setState({ [classList[0]]: value });
    }

    canselInputData(): void {
        this.setState({
            name: '',
            surname: '',
            phone: ''
        });
    }

    render(): ReactElement {
        const { classForm, stateViewForm, dataChangeItem } = this.props as TPropsForm;
        const { name, surname, phone, viewFillFields } = this.state as TStateForm;
        const placeholders = {
            name: dataChangeItem[0],
            surname: dataChangeItem[1],
            phone: dataChangeItem[2]
        }
        return <div className={classForm}>
            <div className="title">
                <p>Field for add contact</p>
            </div>
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="name">
                    name
                </label>
                <input
                    type="text"
                    value={name}
                    placeholder={placeholders.name}
                    className="name"
                    onChange={this.onChangeInput}
                />
                <label htmlFor="surname">
                    surname
                </label>
                <input
                    type="text"
                    value={surname}
                    placeholder={placeholders.surname}
                    className="surname"
                    onChange={this.onChangeInput}
                />
                <label htmlFor="phone">
                    phone
                </label>
                <input
                    type="text"
                    value={phone}
                    placeholder={placeholders.phone}
                    className="phone"
                    onChange={this.onChangeInput}
                />
                <div className="buttons_container">
                    <button
                        type="submit"
                        className="save"
                    >
                        save contact
                    </button>
                    <button
                        type="button"
                        className="cancel"
                        onClick={this.canselInputData}
                    >
                        cancel input
                    </button>
                    <button
                        type="button"
                        className="hide__form"
                        onClick={(): void => stateViewForm()}
                    >
                        hide form
                    </button>
                    <p
                        className="fill__fields"
                        style={{ display: viewFillFields }}
                    >
                        fill in all fields
                    </p>
                </div>
            </form>
        </div>
    }
}

export { FormContact }
