import {
    SetStateAction,
    useEffect,
    useState
} from 'react';
import {
    IUser,
    IUseUserPageHook
} from '../services/interfaces';
import { getApi } from '../services/loaders';

export const useUsersPageHook = (): IUseUserPageHook => {
    const [users, setUsers] = useState([] as IUser[] | []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect((): void => {
        getApi()
            .then((data): void => {
                setUsers(data as SetStateAction<IUser[]>);
                setLoading(false);
            })
            .catch((): void => {
                setError(true);
            });
    }, []);

    return {
        users,
        loading,
        error
    }
}