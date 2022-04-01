const urlApi: string = 'https://612687da3ab4100017a68fd8.mockapi.io/contacts/';

type TDataContact = {
    name: string,
    surname: string,
    phone: string,
    id: string
}

export const getContactsList = (): Promise<Array<TDataContact>> => fetch(urlApi, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => response.json());

export const addNewContact = (contact: {}): Promise<TDataContact> => fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => response.json());

export const updateContact = (contact: {}, id: string): Promise<TDataContact> => fetch(`${urlApi}${id}`, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => response.json());

export const deleteItemContactList = (id: string): Promise<TDataContact> => fetch(`${urlApi}${id}`, {
    method: "DELETE"
}).then(respose => respose.json());