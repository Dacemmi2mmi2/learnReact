import { useParams } from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';
import { getApi } from '../../../../services/loaders'
import {
    IUserData,
    IAlbumsData,
    IUserContentHook
} from '../../../../services/interfaces';

export const useUserContent = (): IUserContentHook => {
    const [dataUser, setDataUser] = useState({} as IUserData);
    const [expanded, setExpanded] = useState([] as string[] | []);
    const { id } = useParams();
    const uri = `users/${id}`;

    const handleExpandClick = (): void => {
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? ['1', '8', '13', '16'] : [],
        );
    };

    useEffect((): void => {
        getApi(uri)
            .then((data: IUserData[] | IAlbumsData[] | IUserData): void => {
                setDataUser(data as IUserData)
            });
        //eslint-disable-next-line
    }, []);

    return {
        dataUser,
        expanded,
        handleExpandClick
    }
}