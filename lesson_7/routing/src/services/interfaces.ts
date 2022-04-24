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
    address: Iaddres,
    company: Icompany,
    email: string,
    id: number,
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
    listUsers: IUserData[] | []
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