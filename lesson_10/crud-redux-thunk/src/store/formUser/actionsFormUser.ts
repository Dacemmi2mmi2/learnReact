import { IActionThunk, IUser } from '../../services/interfaces';
import { AnyAction, Dispatch } from 'redux';

export const FORM_USER_SET_USER = 'FORM_USER_SET_USER';
export const setFormUser = (user: IUser): AnyAction => ({
    type: FORM_USER_SET_USER,
    payload: user
});

export const getFormUserThunk = (user: IUser): IActionThunk =>
    (dispatch: Dispatch<AnyAction>): void => {
        dispatch(setFormUser(user));
    }