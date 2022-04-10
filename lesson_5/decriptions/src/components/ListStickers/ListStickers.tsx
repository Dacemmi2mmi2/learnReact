import {
    ReactElement,
    useEffect,
    useCallback
} from 'react';
import { Sticker } from '../Sticker/Sticker';
import {
    getDataApi,
    updateItem,
    deleteItem,
    addItem
} from '../../services/loaders';
import { useAsync } from '../../services/customHooks';
import { IdataSticker } from '../../services/interfaces';
import './ListStickers.css';

const ListStickers = (): ReactElement => {
    const {
        data: listDescriptions,
        setData,
        getData,
    } = useAsync(getDataApi, []);

    const addSticker = (): void => {
        addItem({ description: '' })
            .then((data: IdataSticker): void => {
                setData([...listDescriptions, data]);
            });
    }

    const updateStickers = useCallback((id: string, description: string): void => {
        updateItem(id, { id, description })
            .then((data: IdataSticker): void => {
                setData(listDescriptions.map(item => item.id !== data.id ? item : data));
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listDescriptions]);

    const deleteSticker = useCallback((id: string): void => {
        setData(listDescriptions.filter(item => item.id !== id));
        deleteItem(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listDescriptions]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect((): void => getData(), []);

    return (
        <div className="ListStickers">
            <div className="wrapper">
                <h1 className="title">Descriptions</h1>
                <button
                    className="btn__add"
                    onClick={addSticker}
                >
                    add new sticker
                </button>
            </div>
            {
                listDescriptions.map((item: IdataSticker) => {
                    return <Sticker
                        key={item.id}
                        description={item.description}
                        id={item.id}
                        deleteSticker={deleteSticker}
                        updateStickers={updateStickers}
                    />
                })
            }
        </div>
    );
}

export { ListStickers };
