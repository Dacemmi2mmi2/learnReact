import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';

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

export interface IUseFormUserPageHook {
    loading: boolean,
    user: IUser,
    error: boolean,
}

export interface IUseFormHook {
    user: IUser,
    saveUser: MouseEventHandler<HTMLButtonElement>,
    toUsersPage: MouseEventHandler<HTMLButtonElement>,
    writeUser: ChangeEventHandler<HTMLInputElement>
}

export interface IActionThunk {
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void
}

export interface IState {
    listUsers: { users: IUser[] | [] },
    formUser: { user: IUser }
}

export interface IAction {
    type: string,
    payload: IUser[] | IUser
}