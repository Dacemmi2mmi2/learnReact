import { ReactElement } from 'react';
import { Loading } from '../../commonPages/Loading/Loading';
import { Error } from '../../commonPages/Error/Error';
import { FormUser } from '../FormUserPage/FormUser/FormUser';
import { useFormUserPageHook } from '../../../hooks/useFormUserPage';
import { IUseFormUserPageHook } from '../../../services/interfaces';

export const FormUserPage = (): ReactElement => {
    const {
        user,
        loading,
        error,
    } = useFormUserPageHook() as IUseFormUserPageHook;

    const pages = (): ReactElement => {
        switch (true) {
            case loading: return <Loading />;
            case error: return <Error />;
            default: return <FormUser user={user}/>
        }
    }

    return (
        <>
            {pages()}
        </>
    );
}