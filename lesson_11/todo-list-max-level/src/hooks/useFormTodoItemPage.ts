import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleViewModal } from '../store/formToDoItem/actionsFormTodoItem';
import { IState, IUseFormTodoItemPage } from '../services/interfaces';

export const useFormTodoItemPage = (): IUseFormTodoItemPage => {
    const open = useSelector(({ formTodoItem }: IState) => formTodoItem.viewModal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = (): void => {
        dispatch(toggleViewModal(false));
        navigate('/');
    }

    return {
        open,
        handleClose,
    }
}