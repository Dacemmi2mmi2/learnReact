export interface IUser {
    id: number | string,
    name: string,
    phone: number | string,
    surname: string
}

export interface IUseUserPageHook {
    users: IUser[] | [],
    loading: boolean,
    error: boolean
}

export interface IStylesTbodyRow {
    [key: string]: string | { 
        [key: string]: string | number
    }
}