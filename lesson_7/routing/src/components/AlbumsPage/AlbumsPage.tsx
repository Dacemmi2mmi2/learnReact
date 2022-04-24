import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAlbumsPage } from './albumsPageHook';
import { Album } from '../Album/Album';
import { linkStyles } from '../../services/additionalStyles';
import {
    IAlbumsData,
    IAlbumsPageHook
} from '../../services/interfaces';

export const AlbumsPage = (): ReactElement => {
    const { listAlbums } = useAlbumsPage() as IAlbumsPageHook;

    return (
        <div className="page__container">
            <div className="list__container">
                <ul>
                    <li>
                        <Link
                            to='/'
                            style={linkStyles}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/users'
                            style={linkStyles}
                        >
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="data__container">
                <h1 className='title__page'>Albums</h1>
                <div className="data__page">
                    {
                        listAlbums.map((item: IAlbumsData, index: number): ReactElement => {
                            return (
                                <Album
                                    key={index}
                                    dataAlbum={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}