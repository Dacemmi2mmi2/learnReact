import { ReactElement } from 'react';
import {
    IAlbumProps,
    IAlbumsData
} from '../../services/interfaces';
import './Album.css';

export const Album = ({ dataAlbum }: IAlbumProps): ReactElement => {
    const { id, userId, title } = dataAlbum as IAlbumsData;

    return (
        <div className="album__card">
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
        </div>
    );
}