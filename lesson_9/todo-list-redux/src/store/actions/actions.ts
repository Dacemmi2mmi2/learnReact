import { AnyAction } from 'redux';
import { ITodoItem } from '../../services/interfaces';

export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const deleteItem = (payload: number): AnyAction => ({
    type: DELETE_TODO_ITEM,
    payload
});

export const CHANGE_STATE_TODO_ITEM = 'CHANGE_STATE_TODO_ITEM';
export const changeStatus = (payload: number): AnyAction => ({
    type: CHANGE_STATE_TODO_ITEM,
    payload
});

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const addItem = (payload: ITodoItem): AnyAction => ({
    type: ADD_TODO_ITEM,
    payload
});