import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { emptyUser } from '../services/const';
import { IUserData } from '../services/interfaces';
import { getApi } from '../services/loaders';

export const useGetDataUserHook = () => {
    const [dataUser, setDataUser] = useState({} as IUserData);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const uri = `users/${id}`;

    useEffect((): void => {
        if (id) {
            getApi(uri)
                .then((data): void => {
                    setDataUser(data as IUserData);
                    setLoading(false);
                })
                .catch(() => {
                    setErrorMessage(true);
                });
        } else {
            setDataUser(emptyUser);
            setLoading(false);
        }
        //eslint-disable-next-line
    }, []);


    return {
        errorMessage,
        loading,
        dataUser,
        id
    }
}