import {
    ReactElement,
    useContext
} from 'react';
import { ThemeContext } from '../../servises/context';
import { IPropsItemContactList } from '../../servises/interfaces';
import {
    listContactItemStyle,
    buttonsStyle
} from '../../servises/additionalStyles';

export const ItemListContact = (props: IPropsItemContactList): ReactElement => {
    const valueContext = useContext(ThemeContext);
    const {
        name,
        surname,
        phone,
        id,
        deleteContact,
        stateViewForm,
        getDataItem
    } = props as IPropsItemContactList;
    
    return (
        <li
            id={id}
            style={valueContext ? undefined : listContactItemStyle}
        >
            <p className="name">{name}</p>
            <p className="surname">{surname}</p>
            <p className="phone">{phone}</p>
            <div className="buttons__item">
                <button
                    style={valueContext ? undefined : buttonsStyle}
                    onClick={(): void => { deleteContact(id) }}
                >
                    delete
                </button>
                <button
                    style={valueContext ? undefined : buttonsStyle}
                    onClick={
                        (): void => {
                            stateViewForm('update');
                            getDataItem(name, surname, phone, id);
                        }
                    }
                >
                    edit
                </button>
            </div>
        </li>
    );
}