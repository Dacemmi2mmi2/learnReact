import { create, update } from '../services/loaders';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IFormProps, IUserData, IUseFormUsers } from '../services/interfaces';

export const useForm = (props: IFormProps): IUseFormUsers => {
    const { dataUser, edit } = props as IFormProps;
    const navigate = useNavigate();
    const [dataUserForm, setDataUserForm] = useState(dataUser as IUserData);
    const uri = 'users';

    const onChangeMainFields = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setDataUserForm({ ...dataUserForm, [target.name]: target.value });
    }

    const submitData = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (edit) {
            update(uri, edit, dataUserForm);
        } else {
            create(uri, dataUserForm);
        }
        navigate(`/${uri}`);
    }

    return {
        dataUserForm,
        submitData,
        onChangeMainFields,
    }
}