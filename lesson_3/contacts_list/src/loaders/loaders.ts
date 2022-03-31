const urlApi: string = 'https://612687da3ab4100017a68fd8.mockapi.io/contacts';

type TApi = {
    name: string,
    surname: string,
    phone: string,
    id: string
}

export const getContactsList = (): Promise<Array<TApi>> => fetch(urlApi, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => response.json());