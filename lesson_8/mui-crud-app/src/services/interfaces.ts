import { ChangeEvent, FormEvent } from 'react';

export interface Iaddres {
    city: string,
    geo: {
        lat: string,
        lng: string
    },
    street: string,
    suite: string,
    zipcode: string
}

export interface Icompany {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface IUserData {
    address?: Iaddres,
    company?: Icompany,
    email: string,
    id: number | string,
    name: string,
    phone: string,
    username: string,
    website: string
}

export interface IUserProps {
    dataUser: IUserData,
    key: number
}

export interface IUsersPageHook {
    listUsers: IUserData[] | [],
    errorMessage: boolean,
    loading: boolean
}

export interface IAlbumsData {
    id: number,
    title: string,
    userId: number
}

export interface IAlbumProps {
    dataAlbum: IAlbumsData,
    key: number
}

export interface IAlbumsPageHook {
    listAlbums: IAlbumsData[] | []
}

export interface IUserContentPageHook {
    dataUser: IUserData,
    errorMessage: boolean,
    loading: boolean,
}

export interface IUserContentHook {
    expanded: string[] | [],
    handleExpandClick: () => void
}

export interface IUseGetDataUserHook {
    errorMessage: boolean,
    loading: boolean,
    dataUser: IUserData,
    id: string | undefined
}

export interface IUseFormUsers {
    dataUserForm: IUserData,
    submitData: (event: FormEvent<HTMLFormElement>) => void,
    onChangeMainFields: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

export interface IFormProps {
    dataUser: IUserData,
    edit: undefined | string
}