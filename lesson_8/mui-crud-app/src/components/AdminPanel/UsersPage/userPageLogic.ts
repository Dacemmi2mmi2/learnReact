import {
    SetStateAction,
    useEffect,
    useState
} from 'react';
import {
    IAlbumsData,
    IUserData,
    IUsersPageHook
} from '../../../services/interfaces';
import { getApi } from '../../../services/loaders';

export const useUsers = (): IUsersPageHook => {
    const [listUsers, setListUsres] = useState([] as IUserData[] | []);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(true);
    const uri = 'users';

    useEffect((): void => {
        getApi(uri)
            .then((data: IUserData[] | IAlbumsData[] | IUserData): void => {
                setListUsres(data as SetStateAction<IUserData[] | []>);
                setLoading(false);
            })
            .catch((): void => {
                setErrorMessage(true);
            });
    }, []);

    return {
        listUsers,
        errorMessage,
        loading
    }
}