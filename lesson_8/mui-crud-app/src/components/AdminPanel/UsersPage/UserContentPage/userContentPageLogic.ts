import { useParams } from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';
import { getApi } from '../../../../services/loaders'
import {
    IUserData,
    IAlbumsData,
    IUserContentPageHook
} from '../../../../services/interfaces';

export const useUserPageContent = (): IUserContentPageHook => {
    const [dataUser, setDataUser] = useState({} as IUserData);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(true);;
    const { id } = useParams();
    const uri = `users/${id}`;

    useEffect((): void => {
        getApi(uri)
            .then((data: IUserData[] | IAlbumsData[] | IUserData): void => {
                setDataUser(data as IUserData);
                setLoading(false);
            })
            .catch(() => {
                setErrorMessage(true);
            });
        //eslint-disable-next-line
    }, []);

    return {
        dataUser,
        errorMessage,
        loading,
    }
}