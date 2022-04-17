import {
    useState,
    ChangeEvent
} from 'react';
import {
    IPropsForm,
    IUseFormContactHook
} from '../../servises/interfaces';

export const useFormContact = (props: IPropsForm): IUseFormContactHook => {
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
        } = props as IPropsForm;
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

    return {
        name,
        surname,
        phone,
        viewFillFields,
        onChangeInput,
        onSubmitForm,
        canselInputData
    }
}