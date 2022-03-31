import React, { ChangeEvent, ReactElement } from 'react';
import './FromContact.css';

type TPropsForm = {
    classForm: string,
    stateViewForm: Function,
    updateContacts: Function
}

type TStateForm = {
    name: string,
    surname: string,
    phone: string
}

class FormContact extends React.Component<TPropsForm> {
    constructor(props: TPropsForm) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            phone: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.canselInputData = this.canselInputData.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { updateContacts } = this.props as TPropsForm;
        const { name, surname, phone } = this.state as TStateForm;
        if (name && surname && phone) {
            const contact = {
                name: name,
                surname: surname,
                phone: phone
            } as TStateForm;
            updateContacts(contact);
        }
    }

    onChangeInput({ target }: ChangeEvent<HTMLInputElement>): void {
        const { classList, value } = target;
        this.setState({
            [classList[0]]: value
        });
    }

    canselInputData(): void {
        this.setState({
            name: '',
            surname: '',
            phone: ''
        });
    }

    render(): ReactElement {
        const { classForm, stateViewForm } = this.props as TPropsForm;
        const { name, surname, phone } = this.state as TStateForm;
        return <div className={classForm}>
            <div className="title">
                <p>Field for add contact</p>
            </div>
            <form
                action=""
                onSubmit={this.onSubmitForm}
            >
                <label htmlFor="name">
                    name
                </label>
                <input
                    type="text"
                    value={name}
                    className="name"
                    onChange={this.onChangeInput}
                />
                <label htmlFor="surname">
                    surname
                </label>
                <input
                    type="text"
                    value={surname}
                    className="surname"
                    onChange={this.onChangeInput}
                />
                <label htmlFor="phone">
                    phone
                </label>
                <input
                    type="text"
                    value={phone}
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
                        className="cancel"
                        onClick={this.canselInputData}
                    >
                        cancel input
                    </button>
                    <button
                        className="hide__form"
                        onClick={(): void => stateViewForm()}
                    >
                        hide form
                    </button>
                </div>
            </form>
        </div>
    }
}

export { FormContact }
