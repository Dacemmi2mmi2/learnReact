import {
    IAction,
    IUser,
    IListUsersState
} from '../../services/interfaces';
import { USERS_SET_LIST_USERS } from './actionsUsers';

const INIT_STATE_USER: IListUsersState = {
    users: []
}

export const reduserUsers = (state = INIT_STATE_USER, { type, payload }: IAction): IListUsersState => {
    switch (type) {
        case USERS_SET_LIST_USERS:
            return { ...state, users: [...(payload as IUser[])] };
        default: return state;
    }
}