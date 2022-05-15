import { IAction, IUser } from '../../services/interfaces';
import {
    USERS_SET_LIST_USERS,
    USERS_CREATE_USER
} from './actionsUsers';

const INIT_STATE_USER: { users: IUser[] } = {
    users: []
}

export const reduserUsers = (state = INIT_STATE_USER, { type, payload }: IAction) => {
    switch (type) {
        case USERS_SET_LIST_USERS:
            return { ...state, users: [...(payload as IUser[])] };
        case USERS_CREATE_USER:
            const newUser = { id: Date.now(), ...payload };
            return { ...state, users: [...state.users, newUser] };
        default: return state;
    }
}