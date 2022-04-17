import { ReactElement } from 'react';
import { useFormContact } from './form-contact-logic';
import { IPropsForm } from '../../servises/interfaces';
import './FromContact.css';

export const FormContact = (props: IPropsForm): ReactElement => {
    const {
        name,
        surname,
        phone,
        viewFillFields,
        onChangeInput,
        onSubmitForm,
        canselInputData
    } = useFormContact(props);

    const { classForm, stateViewForm, dataChangeItem } = props as IPropsForm;
    const placeholders: { [key: string]: string } = {
        name: dataChangeItem[0],
        surname: dataChangeItem[1],
        phone: dataChangeItem[2]
    }
    return (
        <div className={classForm}>
            <div className="wrapper__form">
                <div className="title">
                    <p>Field for add/update contact</p>
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
        </div>
    );
}
