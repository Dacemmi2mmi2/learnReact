import { AxiosResponse } from 'axios';
import { API } from './api';
import { usersURI } from './consts';
import { IUser } from './interfaces';

export const getApi = (): Promise<IUser[]> =>
    API.get(usersURI)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const remove = (id: number | string): Promise<IUser> =>
    API.delete(`${usersURI}/${id}`)
        .then(({ data }: AxiosResponse) => JSON.parse(data));