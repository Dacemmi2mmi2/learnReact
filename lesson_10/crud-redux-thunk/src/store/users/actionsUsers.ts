import { AnyAction, Dispatch } from 'redux';
import { create, remove } from '../../services/loaders';
import {
    IUser,
    IActionThunk,
    IState
} from '../../services/interfaces';

export const USERS_SET_LIST_USERS = 'USERS_SET_LIST_USERS';
export const setListUsers = (users: IUser | IUser[]): AnyAction => ({
    type: USERS_SET_LIST_USERS,
    payload: users
});

export const USERS_CREATE_USER = 'USERS_CREATE_USER';
export const createNewUser = (user: IUser): AnyAction => ({
    type: USERS_CREATE_USER,
    payload: user
});

export const getListUsersThunk = (listUsers: IUser[]): IActionThunk =>
    (dispatch: Dispatch<AnyAction>): void => {
        dispatch(setListUsers(listUsers));
    }

export const createNewUserThunk = (user: IUser): IActionThunk =>
    (dispatch: Dispatch<AnyAction>): void => {
        create(user)
            .then((newUser) => dispatch(createNewUser(newUser)));
    }

export const updateUserThunk = (id: number | string): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        // const { users } = getState();
    }

export const deleteUserThunk = (id: number | string): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listUsers } = getState();
        remove(id)
            .then(() => {
                const updatedListUsers = listUsers.users.filter((user) => user.id !== id);
                dispatch(setListUsers(updatedListUsers));
            });
    }