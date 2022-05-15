import { emptyUser } from '../../services/consts';
import {
    IAction,
    IUser,
    IFormUserState
} from '../../services/interfaces';
import { FORM_USER_SET_USER } from './actionsFormUser';

const INIT_STATE_FORM_USER: IFormUserState = {
    user: emptyUser
}

export const reducerFormUser = (state = INIT_STATE_FORM_USER, { type, payload }: IAction): IFormUserState => {
    switch (type) {
        case FORM_USER_SET_USER:
            return { ...state, user: (payload as IUser) };
        default:
            return state;
    }
}