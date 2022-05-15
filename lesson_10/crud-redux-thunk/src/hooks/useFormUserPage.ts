import {
    useEffect,
    useState,
} from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    IUseFormUserPageHook,
    IState
} from '../services/interfaces';
import { getApi } from '../services/loaders';
import { emptyUser } from '../services/consts';
import { getFormUserThunk } from '../store/formUser/actionsFormUser';

export const useFormUserPageHook = (): IUseFormUserPageHook => {
    const user = useSelector(({ formUser }: IState) => formUser.user);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const uri = `users/${id}`;

    useEffect((): void => {
        if (id) {
            getApi(uri)
                .then((user): void => {
                    // @ts-expect-error
                    dispatch(getFormUserThunk(user));
                    setLoading(false);
                })
                .catch((): void => {
                    setError(true);
                });
        } else {
            // @ts-expect-error
            dispatch(getFormUserThunk(emptyUser));
            setLoading(false);
        }
        // eslint-disable-next-line
    }, [dispatch]);


    return {
        loading,
        user,
        error,
    }
}