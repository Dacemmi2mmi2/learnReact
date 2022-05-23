import { ReactElement } from 'react';
import { TableUsers } from '../TableUsers/TableUsers';
import { ErrorPage } from '../pages/ErrorPge/ErrorPage';
import { useUsers } from '../../hooks/userPageHook';
import { LoadingPage } from '../pages/LoadingPage/LoadingPage';
import { IUsersPageHook } from '../../services/interfaces';

export const UsersPage = (): ReactElement => {
    const {
        listUsers,
        errorMessage,
        loading
    } = useUsers() as IUsersPageHook;

    const pages = (): ReactElement => {
        switch (true) {
            case loading: return <LoadingPage />
            case errorMessage: return <ErrorPage />
            default: return <TableUsers listUsers={listUsers} />
        }
    }

    return (
        <>
            {pages()}
        </>
    );
}