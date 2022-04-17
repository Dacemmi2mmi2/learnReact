import {
    ReactElement,
    useContext
} from 'react';
import { ThemeContext } from '../../servises/context';
import {
    IItemContactList,
    IPropsListContact
} from '../../servises/interfaces';
import { ItemListContact } from './../itemListContact/ItemListContact';
import {
    backgroundStyle,
    buttonsStyle,
    titleStyle
} from '../../servises/additionalStyles';
import './ListContact.css';


export const ListContact = (props: IPropsListContact): ReactElement => {
    const valueContext = useContext(ThemeContext);
    const {
        contacts,
        stateViewForm,
        deleteContact,
        getDataItem,
        resetUpdateData,
        changeContext
    } = props as IPropsListContact;

    return (
        <div
            className="ListContact__page"
            style={valueContext ? undefined : backgroundStyle}
        >
            <div className="ListContact__wrapper">
                <div
                    className="title"
                    style={valueContext ? undefined : titleStyle}
                >
                    <p>List of contacts</p>
                </div>
                <ul className="list__contacts">
                    {
                        contacts.map((item: IItemContactList): ReactElement => {
                            const { name, surname, phone, id } = item as IItemContactList;
                            return <ItemListContact
                                key={id}
                                name={name}
                                surname={surname}
                                phone={phone}
                                id={id}
                                deleteContact={deleteContact}
                                stateViewForm={stateViewForm}
                                getDataItem={getDataItem}
                            />
                        })
                    }
                </ul>
                <button
                    className="add__contact"
                    onClick={
                        (): void => {
                            stateViewForm('add');
                            resetUpdateData();
                        }
                    }
                    style={valueContext ? undefined : buttonsStyle}
                >
                    add contact
                </button>
                <button
                    className='change__theme'
                    onClick={(): void => { changeContext() }}
                    style={valueContext ? undefined : buttonsStyle}
                >
                    change theme
                </button>
            </div>
        </div>
    );
}
