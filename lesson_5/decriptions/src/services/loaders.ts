import { IdataDescription, IlistDescriptons } from "./interfaces"

const URL_API: string = 'https://612687da3ab4100017a68fd8.mockapi.io/stickers/';

export const getDataApi = (): Promise<IlistDescriptons> => fetch(URL_API, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then((response: Response): Promise<IlistDescriptons> => response.json());

export const updateItem = (id: string, description: {}): Promise<IdataDescription> => fetch(URL_API + id, {
    method: 'PUT',
    body: JSON.stringify(description),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then((response: Response): Promise<IdataDescription> => response.json());

export const deleteItem = (id: string): Promise<IdataDescription> => fetch(URL_API + id, {
    method: 'DELETE'
}).then(response => response.json());