import { AxiosResponse } from 'axios';
import { API } from './api';
import { usersURI } from './consts';
import { IUser } from './interfaces';

export const getApi = (uri: string = usersURI): Promise<IUser[] | IUser> =>
    API.get(uri)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const remove = (id: number | string): Promise<IUser> =>
    API.delete(`${usersURI}/${id}`)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const update = (id: string | number): Promise<IUser> =>
    API.put(`${usersURI}/${id}`)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const create = (user: IUser): Promise<IUser> =>
    API.post(usersURI, JSON.stringify(user))
        .then(({ data }: AxiosResponse) => JSON.parse(data));