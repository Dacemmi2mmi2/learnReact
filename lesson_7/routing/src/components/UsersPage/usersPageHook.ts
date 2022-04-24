import {
    SetStateAction,
    useEffect,
    useState
} from 'react';
import {
    IAlbumsData,
    IUserData,
    IUsersPageHook
} from '../../services/interfaces';
import { getApi } from '../../services/loaders';

export const useUsers = (): IUsersPageHook => {
    const [listUsers, setListUsres] = useState([] as IUserData[] | []);
    const uri = 'users';

    useEffect((): void => {
        getApi(uri).then((data: IUserData[] | IAlbumsData[]): void => {
            setListUsres(data as SetStateAction<IUserData[] | []>);
        });
    }, []);

    return { listUsers }
}