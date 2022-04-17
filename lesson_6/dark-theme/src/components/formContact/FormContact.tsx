import {
    ReactElement,
    useContext
} from 'react';
import { useFormContact } from './form-contact-logic';
import { IPropsForm } from '../../servises/interfaces';
import { ThemeContext } from '../../servises/context';
import {
    mainBgFormStyle,
    backgroundStyle,
    titleStyle,
    buttonsStyle,
    labelFromStyle,
    inputFormStyle
} from '../../servises/additionalStyles';
import './FromContact.css';

export const FormContact = (props: IPropsForm): ReactElement => {
    const valueContext = useContext(ThemeContext);
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
        <div
            className={classForm}
            style={valueContext ? undefined : mainBgFormStyle}
        >
            <div
                className="wrapper__form"
                style={valueContext ? undefined : backgroundStyle}
            >
                <div
                    className="title"
                    style={valueContext ? undefined : titleStyle}
                >
                    <p>Field for add/update contact</p>
                </div>
                <form onSubmit={onSubmitForm}>
                    <label
                        htmlFor="name"
                        style={valueContext ? undefined : labelFromStyle}
                    >
                        name
                    </label>
                    <input
                        type="text"
                        value={name}
                        placeholder={placeholders.name}
                        className="name"
                        style={valueContext ? undefined : inputFormStyle}
                        onChange={onChangeInput}
                    />
                    <label
                        htmlFor="surname"
                        style={valueContext ? undefined : labelFromStyle}
                    >
                        surname
                    </label>
                    <input
                        type="text"
                        value={surname}
                        placeholder={placeholders.surname}
                        className="surname"
                        style={valueContext ? undefined : inputFormStyle}
                        onChange={onChangeInput}
                    />
                    <label
                        htmlFor="phone"
                        style={valueContext ? undefined : labelFromStyle}
                    >
                        phone
                    </label>
                    <input
                        type="text"
                        value={phone}
                        placeholder={placeholders.phone}
                        className="phone"
                        style={valueContext ? undefined : inputFormStyle}
                        onChange={onChangeInput}
                    />
                    <div className="buttons_container">
                        <button
                            type="submit"
                            className="save"
                            style={valueContext ? undefined : buttonsStyle}
                        >
                            save contact
                        </button>
                        <button
                            type="button"
                            className="cancel"
                            style={valueContext ? undefined : buttonsStyle}
                            onClick={canselInputData}
                        >
                            cancel input
                        </button>
                        <button
                            type="button"
                            className="hide__form"
                            style={valueContext ? undefined : buttonsStyle}
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
