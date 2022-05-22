import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodoListThunk } from '../store/toDoList/actionsToDoList';
import { toggleViewModal } from '../store/formToDoItem/actionsFormTodoItem';
import { getApi } from '../services/loaders';
import { IUseTopBar } from '../services/interfaces';

export const useTopBar = (): IUseTopBar => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElement(event.currentTarget);
    }

    const handleClose = ({ target }: React.MouseEvent<HTMLElement>): void => {
        const { id } = target as HTMLElement;

        switch (id) {
            case 'Done':
                getApi()
                    .then((todos) => {
                        //@ts-expect-error
                        dispatch(getTodoListThunk(todos, id));
                    });
                break;
            case 'Progress':
                getApi()
                    .then((todos) => {
                        //@ts-expect-error
                        dispatch(getTodoListThunk(todos, id));
                    });
                break;
            case 'Add':
                navigate('form');
                dispatch(toggleViewModal(true));
                break;
            default:
                getApi()
                    .then((todos) => {
                        //@ts-expect-error
                        dispatch(getTodoListThunk(todos));
                    });
        }

        setAnchorElement(null);
    }

    return {
        anchorElement,
        open,
        handleClick,
        handleClose
    }
}