import { AnyAction } from 'redux';

export const FORMTODO_TOGGLE_MODAL = 'FORMTODO_TOGGLE_MODAL';
export const toggleViewModal = (view: boolean): AnyAction => ({
    type: FORMTODO_TOGGLE_MODAL,
    payload: view
});
