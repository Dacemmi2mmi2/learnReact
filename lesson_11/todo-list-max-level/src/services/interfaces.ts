import { MouseEventHandler, ReactElement } from 'react';
import { Dispatch, AnyAction } from 'redux';

export interface ITodo {
    id: string | number,
    title: string,
    completed: boolean
}

export interface IListToDosState {
    todos: ITodo[] | []
}

export interface IFormTodoItemState {
    todo: ITodo,
    viewModal: boolean
}

export interface IState {
    listTodos: IListToDosState,
    formTodoItem: IFormTodoItemState
}

export interface IActionThunk {
    (dispatch: Dispatch<AnyAction>, getState: () => IState): void
}

export interface IAction {
    type: string,
    payload: ITodo[] | ITodo | boolean
}

export interface IUseTodoListPage {
    todos: ITodo[] | [],
    loading: boolean,
    error: boolean
}

export interface IUseTopBar {
    anchorElement: null | HTMLElement,
    open: boolean,
    handleClick: MouseEventHandler<HTMLButtonElement>,
    handleClose: MouseEventHandler<HTMLLIElement>
}

export interface IUseFormTodoItemPage {
    open: boolean,
    handleClose: MouseEventHandler<HTMLLIElement>
}

export interface ITodoItemProps {
    key: number | string,
    id: number | string,
    text: string,
    status: boolean
}

export interface IFormTodoItemProps {
    closeModal: MouseEventHandler<HTMLButtonElement | HTMLLIElement>
}

export interface ITopBarProps {
    window?: () => Window;
    children?: ReactElement;
}