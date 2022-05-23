import { ReactElement } from 'react';
import { FormUsers } from '../FormUsers/FormUsers';
import { ErrorPage } from '../pages/ErrorPge/ErrorPage';
import { LoadingPage } from '../pages/LoadingPage/LoadingPage';
import { useGetDataUserHook } from '../../hooks/getDataUserHook';

export const CreateOrEditUserPage = (): ReactElement => {
    const {
        errorMessage,
        loading,
        dataUser,
        id
    } = useGetDataUserHook();

    const pages = (): ReactElement => {
        switch (true) {
            case errorMessage: return <ErrorPage />;
            case loading: return <LoadingPage />;
            default: return <FormUsers
                dataUser={dataUser}
                edit={id}
            />
        }
    }

    return (
        <>
            {pages()}
        </>
    );
}