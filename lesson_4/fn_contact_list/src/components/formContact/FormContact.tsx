import { ChangeEvent, ReactElement, useState } from 'react';
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

const FormContact = (props: TPropsForm): ReactElement => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [viewFillFields, setViewFillFields] = useState('none');

    const onSubmitForm = (event: ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const {
            createNewContact,
            updateContact,
            isUpdateContact,
            dataChangeItem,
            idUpdateItem
        } = props as TPropsForm;
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
            });
            setName('');
            setSurname('');
            setPhone('');
            setViewFillFields('none');
            dataChangeItem.length = 0;
        } else {
            setViewFillFields('block');
        }
    }

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { classList, value } = target;
        const classesInputs: { [key: string]: Function } = {
            name: setName,
            surname: setSurname,
            phone: setPhone,
        }
        classesInputs[classList[0]](value);
    }

    const canselInputData = (): void => {
        setName('');
        setSurname('');
        setPhone('');
    }
    
    const { classForm, stateViewForm, dataChangeItem } = props as TPropsForm;
    const placeholders = {
        name: dataChangeItem[0],
        surname: dataChangeItem[1],
        phone: dataChangeItem[2]
    }
    return (
        <div className={classForm}>
            <div className="title">
                <p>Field for add contact</p>
            </div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="name">
                    name
                </label>
                <input
                    type="text"
                    value={name}
                    placeholder={placeholders.name}
                    className="name"
                    onChange={onChangeInput}
                />
                <label htmlFor="surname">
                    surname
                </label>
                <input
                    type="text"
                    value={surname}
                    placeholder={placeholders.surname}
                    className="surname"
                    onChange={onChangeInput}
                />
                <label htmlFor="phone">
                    phone
                </label>
                <input
                    type="text"
                    value={phone}
                    placeholder={placeholders.phone}
                    className="phone"
                    onChange={onChangeInput}
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
                        onClick={canselInputData}
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
    )
}

export { FormContact }
