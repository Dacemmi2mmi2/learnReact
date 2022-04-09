import { ReactElement, useEffect, useCallback } from 'react';
import { Description } from '../Description/Description';
import { getDataApi, updateItem, deleteItem } from '../../services/loaders';
import { useAsync } from '../../services/customHooks';
import { IdataDescription } from '../../services/interfaces';
import './ListDescriptions.css'

const ListDescriptions = (): ReactElement => {
    const {
        data: listDescriptions,
        setData,
        getData,
    } = useAsync(getDataApi, []);

    const updateDescription = useCallback((id: string, description: string): void => {
        updateItem(id, { id, description })
            .then((data: IdataDescription): void => {
                setData(listDescriptions.map(item => item.id !== data.id ? item : data));
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listDescriptions]);

    const deleteDescription = useCallback((id: string): void => {
        setData(listDescriptions.filter(item => item.id !== id));
        deleteItem(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listDescriptions]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect((): void => getData(), []);

    return (
        <div className="ListDescriptions">
            <h1 className="title">Descriptions</h1>
            {
                listDescriptions.map((item: IdataDescription) => {
                    return <Description
                        key={item.id}
                        description={item.description}
                        id={item.id}
                        deleteDescription={deleteDescription}
                        updateDescription={updateDescription}
                    />
                })
            }
        </div>
    );
}

export { ListDescriptions };
