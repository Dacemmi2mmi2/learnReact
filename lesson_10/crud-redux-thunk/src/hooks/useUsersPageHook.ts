import { useEffect, useState } from 'react';
import { getApi } from '../services/loaders';

export const useUsersPageHook = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getApi().then((data) => {
            setUsers(data)
        })
    }, []);

    return {
        users
    }
}