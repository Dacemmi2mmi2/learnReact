import { AxiosResponse } from 'axios';
import { API } from './api';
import { todosURI } from './consts';
import { ITodo } from './interfaces';

export const getApi = (uri: string = todosURI): Promise<ITodo[]> =>
    API.get(uri)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const remove = (id: number | string): any =>
    API.delete(`${todosURI}/${id}`)
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const update = (id: string | number, todo: ITodo): Promise<ITodo> =>
    API.put(`${todosURI}/${id}`, JSON.stringify(todo))
        .then(({ data }: AxiosResponse) => JSON.parse(data));

export const create = (todo: ITodo): Promise<ITodo> =>
    API.post(todosURI, JSON.stringify(todo))
        .then(({ data }: AxiosResponse) => JSON.parse(data));