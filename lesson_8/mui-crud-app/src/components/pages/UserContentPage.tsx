import { ReactElement } from 'react';
import { UserContent } from '../UserContent/UserContent';
import { useUserPageContent } from '../../hooks/userContentPageHook';
import { ErrorPage } from '../pages/ErrorPge/ErrorPage';
import { LoadingPage } from '../pages/LoadingPage/LoadingPage';
import { IUserContentPageHook } from '../../services/interfaces';

export const UserContentPage = (): ReactElement => {
    const {
        dataUser,
        errorMessage,
        loading,
    } = useUserPageContent() as IUserContentPageHook;

    const pages = (): ReactElement => {
        switch (true) {
            case errorMessage: return <ErrorPage />;
            case loading: return <LoadingPage />;
            default: return <UserContent dataUser={dataUser}/> 
        }
    }

    return (
        <>
            {pages()}
        </>
    );
}