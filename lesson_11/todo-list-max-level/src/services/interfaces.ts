// import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Dispatch, AnyAction } from 'redux';

export interface ITodo {
    id: string | number,
    title: string,
    completed: boolean
}

export interface IListToDosState {
    todos: ITodo[] | []
}

export interface IState {
    listTodos: IListToDosState,
}

export interface IActionThunk {
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void
}

export interface IAction {
    type: string,
    payload: ITodo[] | ITodo
}

export interface IUseTodoListPage {
    todos: ITodo[] | [],
    loading: boolean,
    error: boolean
}

export interface ITodoItemProps {
    key: number | string,
    id: number | string,
    text: string,
    status: boolean
}