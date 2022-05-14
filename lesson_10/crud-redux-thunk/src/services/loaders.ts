import { AxiosResponse } from 'axios';
import { API } from './api';
// import { IAlbumsData, IUserData } from './interfaces';

const uri = 'users';

export const getApi = (): Promise<any> => API.get(uri)
    .then(({ data }: AxiosResponse) => JSON.parse(data));