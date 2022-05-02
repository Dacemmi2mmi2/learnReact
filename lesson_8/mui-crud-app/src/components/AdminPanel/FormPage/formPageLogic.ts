import { ContactSupportOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUserData } from '../../../services/interfaces';
import { getApi } from '../../../services/loaders';

export const useFormPage = () => {
    const [dataUser, setDataUser] = useState({} as IUserData);
    const navigate = useNavigate();
    const { id } = useParams();
    const uri = `users/${id}`;

    const createUser = (): void => {

    }

    const updateUser = (): void => {

    }


    useEffect((): void => {
        if (id) {
            getApi(uri)
                .then((data): void => {
                    setDataUser(data as IUserData);
                });
        }
    }, []);


    return {
        dataUser,
        navigate
    }
}