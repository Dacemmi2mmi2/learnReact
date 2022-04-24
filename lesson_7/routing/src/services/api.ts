import { Axios } from "axios";

const url = 'https://jsonplaceholder.typicode.com/';
const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export const API: Axios = new Axios({
    baseURL: url,
    headers: headers
});