import { ReactElement } from 'react';
import { Error } from '../../commonPages/Error/Error';
import { Loading } from '../../commonPages/Loading/Loading';
import { TableUsers } from './TableUsers/TableUsers';
import { useUsersPageHook } from '../../../hooks/useUsersPageHook';

export const UsersPage = (): ReactElement => {
    const {
        users,
        loading,
        error
    } = useUsersPageHook();

    const pages = (): ReactElement => {
        switch (true) {
            case error: return <Error />;
            case loading: return <Loading />;
            default: return <TableUsers users={users} />
        }
    }
    
    return (
        <>
            {pages()}
        </>
    );
}