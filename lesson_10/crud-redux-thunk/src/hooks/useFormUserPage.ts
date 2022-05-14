import {
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { IUseFormUserPageHook } from '../services/interfaces';
import { IUser } from '../services/interfaces';
import { getApi } from '../services/loaders';
import { emptyUser } from '../services/consts';

export const useFormUserPageHook = (): IUseFormUserPageHook => {
    const [user, setUser] = useState({} as IUser);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const uri = `users/${id}`;

    useEffect((): void => {
        if (id) {
            getApi(uri)
                .then((data): void => {
                    setUser(data as SetStateAction<IUser>);
                    setLoading(false);
                })
                .catch((): void => {
                    setError(true);
                });
        } else {
            setUser(emptyUser as SetStateAction<IUser>);
            setLoading(false);
        }
        // eslint-disable-next-line
    }, []);


    return {
        loading,
        user,
        error,
    }
}