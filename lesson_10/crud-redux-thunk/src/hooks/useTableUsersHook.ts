import { remove } from '../services/loaders';
import { useNavigate } from 'react-router-dom';

export const useTableUsersHook = () => {
    const navigate = useNavigate();

    const deleteUser = (id: number | string): void => {
        remove(id);
    }

    const createOrEditUser = (id?: number | string): void => {
        id ? navigate(`/form/${id}`) : navigate('/form');
    }

    return {
        deleteUser,
        createOrEditUser
    }
}