import { IUserData } from './interfaces';

export const emptyUser: IUserData = {
    address: {
        city: '',
        geo: {
            lat: '',
            lng: ''
        },
        street: '',
        suite: '',
        zipcode: ''
    },
    company: {
        bs: '',
        catchPhrase: '',
        name: ''
    },
    email: '',
    id: '',
    name: '',
    phone: '',
    username: '',
    website: ''
}