import { IDataContact } from "./interfaces";
import {
    Axios,
    AxiosResponse
} from "axios";

const urlApi = 'https://612687da3ab4100017a68fd8.mockapi.io/contacts/';
const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

const API: Axios = new Axios({
    baseURL: urlApi,
    headers: headers
});

export const getContactsList = (): Promise<IDataContact[]> => API.get('')
    .then(({ data }: AxiosResponse) => JSON.parse(data));

export const addNewContact = (contact: {}): Promise<IDataContact> => API.post('', JSON.stringify(contact))
    .then(({ data }: AxiosResponse) => JSON.parse(data));

export const updateContact = (
    contact: {},
    id: string
): Promise<IDataContact> => API.put(`${id}`, JSON.stringify(contact))
    .then(({ data }: AxiosResponse) => JSON.parse(data));

export const deleteItemContactList = (id: string): Promise<IDataContact> => API.delete(`${id}`)
    .then(({ data }: AxiosResponse) => data);
