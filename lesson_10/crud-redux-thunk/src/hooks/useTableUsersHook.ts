import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUserThunk } from '../store/users/actionsUsers';
import { IUseTableUsersHook } from '../services/interfaces';

export const useTableUsersHook = (): IUseTableUsersHook => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteUser = (id: number | string): void => {
        //@ts-expect-error
        dispatch(deleteUserThunk(id));
    }

    const toFormUser = (id?: number | string): void => {
        id ? navigate(`/form/${id}`) : navigate('/form');
    }

    return {
        deleteUser,
        toFormUser
    }
}