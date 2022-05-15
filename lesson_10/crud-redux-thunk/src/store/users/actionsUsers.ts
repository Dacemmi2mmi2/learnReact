import { AnyAction, Dispatch } from 'redux';
import { remove, create, update } from '../../services/loaders';
import {
    IUser,
    IActionThunk,
    IState
} from '../../services/interfaces';

export const USERS_SET_LIST_USERS = 'USERS_SET_LIST_USERS';
export const setListUsers = (users: IUser[]): AnyAction => ({
    type: USERS_SET_LIST_USERS,
    payload: users
});

export const getListUsersThunk = (listUsers: IUser[]): IActionThunk =>
    (dispatch: Dispatch<AnyAction>): void => {
        dispatch(setListUsers(listUsers));
    }

export const createNewUserThunk = (user: IUser): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listUsers } = getState();
        create(user)
            .then((newUser) => {
                const updatedListUsers = [...listUsers.users, newUser];
                dispatch(setListUsers(updatedListUsers));
            });
    }

export const updateUserThunk = (id: number | string, user: IUser): IActionThunk =>
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void => {
        const { listUsers } = getState();
        update(id, user)
            .then((updatedUser) => {
                const updatedListUsers = listUsers.users.map((user) => user.id === id ? updatedUser : user);
                dispatch(setListUsers(updatedListUsers));
            })
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