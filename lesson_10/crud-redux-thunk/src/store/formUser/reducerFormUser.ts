import { emptyUser } from '../../services/consts';
import { IAction, IUser } from '../../services/interfaces';
import { FORM_USER_SET_USER } from './actionsFormUser';

const INIT_STATE_FORM_USER: { user: IUser } = {
    user: emptyUser
}

export const reducerFormUser = (state = INIT_STATE_FORM_USER, { type, payload }: IAction) => {
    switch (type) {
        case FORM_USER_SET_USER:
            return { ...state, user: payload };
        default:
            return state;
    }
}