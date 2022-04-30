import { AxiosResponse } from 'axios';
import { API } from './api';
import { IAlbumsData, IUserData } from './interfaces';

export const getApi = (uri: string): Promise<IUserData[] | IAlbumsData[] | IUserData> => API.get(uri)
    .then(({ data }: AxiosResponse) => JSON.parse(data));