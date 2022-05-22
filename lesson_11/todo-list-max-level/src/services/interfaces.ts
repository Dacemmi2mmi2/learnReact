import { MouseEventHandler, ReactElement, ChangeEventHandler } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { FieldError, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';

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

export interface IUseFormTodoItem {
    id: string | undefined,
    status: string,
    statuses: string[],
    register: UseFormRegister<ITodo>,
    errors: { 
        id?: FieldError | undefined,
        title?: FieldError | undefined,
        completed?: FieldError | undefined
    },
    isDirty: boolean,
    handleSubmit: UseFormHandleSubmit<ITodo>,
    closeModal: MouseEventHandler<HTMLButtonElement>,
    saveTodoItem: (todo: ITodo) => void,
    handleChangeStatus: ChangeEventHandler<HTMLInputElement>
}

export interface IUseCardTodoItem {
    id: number | string,
    text: string,
    status: boolean,
    deleteTodoItem: (id: number | string) => void,
    toggleStatusTodoItem: (id: number | string) => void,
    updateDescriptionTodoItem: (id: number | string) => void
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