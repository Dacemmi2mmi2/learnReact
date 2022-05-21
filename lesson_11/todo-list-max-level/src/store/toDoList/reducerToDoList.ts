import {
    IAction,
    IListToDosState,
    ITodo
} from '../../services/interfaces';
import {
    TODOLIST_SET_LIST_TODOS,
    TODOLIST_SHOW_DONE_TASK,
    TODOLIST_SHOW_IN_PROGRESS_TASK
} from './actionsToDoList';

const INIT_STATE_TODOS: IListToDosState = {
    todos: []
}

export const reduserTodoList = (state = INIT_STATE_TODOS, { type, payload }: IAction): IListToDosState => {
    switch (type) {
        case TODOLIST_SET_LIST_TODOS:
            return { ...state, todos: [...(payload as ITodo[])] };
        case TODOLIST_SHOW_DONE_TASK:
            const doneTasks = (payload as ITodo[]).filter((el) => el.completed);
            return { ...state, todos: [...doneTasks] }
        case TODOLIST_SHOW_IN_PROGRESS_TASK:
            const inProgressTasks = (payload as ITodo[]).filter((el) => !el.completed);
            return { ...state, todos: [...inProgressTasks] }
        default: return state;
    }
}