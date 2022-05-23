import { AxiosResponse } from 'axios';
import { API } from './api';
import { IAlbumsData, IUserData } from './interfaces';

export const getApi = (uri: string): Promise<IUserData[] | IAlbumsData[] | IUserData> =>
    API.get(uri)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const create = (uri: string, item: IUserData): Promise<IUserData> =>
    API.post(uri, JSON.stringify(item))
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const update = (
    uri: string,
    id: number | string,
    item: IUserData
): Promise<IUserData> =>
    API.put(`${uri}/${id}`, JSON.stringify(item))
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const deleteItem = (uri: string, id: number | string): Promise<IUserData> =>
    API.delete(`${uri}/${id}`)
        .then(({ data }: AxiosResponse) => JSON.parse(data));