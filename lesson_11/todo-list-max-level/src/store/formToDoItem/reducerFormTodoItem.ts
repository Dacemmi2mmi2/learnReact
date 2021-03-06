import { emptyTodoItem } from '../../services/consts';
import { IAction, IFormTodoItemState } from '../../services/interfaces';
import { FORMTODO_TOGGLE_MODAL } from './actionsFormTodoItem';

const INIT_STATE_FORM_TODOS: IFormTodoItemState = {
    todo: emptyTodoItem,
    viewModal: false
}

export const reducerFormTodoItem = (state = INIT_STATE_FORM_TODOS, { type, payload }: IAction): IFormTodoItemState => {
    switch (type) {
        case FORMTODO_TOGGLE_MODAL:
            return { ...state, viewModal: (payload as boolean) }
        default: return state;
    }
}