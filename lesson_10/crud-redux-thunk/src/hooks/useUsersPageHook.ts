import {
    useEffect,
    useState
} from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    IState,
    IUseUserPageHook
} from '../services/interfaces';
import { getApi } from '../services/loaders';
import { getListUsersThunk } from '../store/users/actionsUsers';

export const useUsersPageHook = (): IUseUserPageHook => {
    const users = useSelector(({ listUsers }: IState) => listUsers.users);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect((): void => {
        getApi().then((users) => {
            //@ts-expect-error
            dispatch(getListUsersThunk(users));
            setLoading(false);
        })
        .catch((): void => {
            setError(true);
        });
    }, [dispatch]);

    return {
        users,
        loading,
        error
    }
}