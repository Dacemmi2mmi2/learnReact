import {
    useEffect,
    useState,
    SetStateAction
} from 'react'
import {
    IAlbumsData,
    IAlbumsPageHook,
    IUserData
} from '../../services/interfaces';
import { getApi } from '../../services/loaders';

export const useAlbumsPage = (): IAlbumsPageHook => {
    const [listAlbums, setListAlbums] = useState([] as IAlbumsData[] | []);
    const uri = 'albums';

    useEffect((): void => {
        getApi(uri).then((data: IAlbumsData[] | IUserData[]): void => {
            setListAlbums(data as SetStateAction<IAlbumsData[] | []>)
            console.log(data);
        });
    }, []);
    
    return { listAlbums }
}