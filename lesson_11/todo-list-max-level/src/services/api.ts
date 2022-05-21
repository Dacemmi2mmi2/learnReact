import { Axios } from 'axios';

const url = 'https://612687da3ab4100017a68fd8.mockapi.io/';
const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export const API: Axios = new Axios({
    baseURL: url,
    headers: headers
});