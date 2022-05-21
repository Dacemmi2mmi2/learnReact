import {
    IAction,
    IListToDosState,
    ITodo
} from '../../services/interfaces';
import { TODOLIST_SET_LIST_TODOS } from './actionsToDoList';

const INIT_STATE_TODOS: IListToDosState = {
    todos: []
}

export const reduserTodoList = (state = INIT_STATE_TODOS, { type, payload }: IAction): IListToDosState => {
    switch (type) {
        case TODOLIST_SET_LIST_TODOS:
            return { ...state, todos: [...(payload as ITodo[])] };
        default: return state;
    }
}