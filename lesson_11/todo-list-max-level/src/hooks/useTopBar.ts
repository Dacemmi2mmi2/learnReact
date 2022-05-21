import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodoListThunk } from '../store/toDoList/actionsToDoList';
import { getApi } from '../services/loaders';
import { IUseTopBar } from '../services/interfaces';

export const useTopBar = (): IUseTopBar => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    }

    const handleClose = ({ target }: React.MouseEvent<HTMLElement>) => {
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