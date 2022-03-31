import React, { ChangeEvent, ReactElement } from 'react';
import './FromContact.css';

type TPropsForm = {
    classForm: string,
    stateViewForm: Function
}

type TStateFrom = {
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
        const { name, surname, phone } = this.state as TStateFrom;
        return <div className={classForm}>
            <div className="title">
                <p>Field for add contact</p>
            </div>
            <form action="">
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
            </form>
            <div className="buttons_container">
                <button className="save">save contact</button>
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
        </div>
    }
}

export { FormContact }
