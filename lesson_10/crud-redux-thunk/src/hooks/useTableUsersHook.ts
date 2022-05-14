import { remove } from '../services/loaders';

export const useTableUsersHook = () => {
    const deleteUser = (id: number | string): void => {
        remove(id);
    }

    const editUser = (id: number | string): void => {
        console.log(id);
    }

    return {
        deleteUser,
        editUser
    }
}