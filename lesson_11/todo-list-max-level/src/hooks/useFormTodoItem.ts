import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emptyTodoItem } from '../services/consts';
import { ITodo, IState, IFormTodoItemProps } from '../services/interfaces';
import { createNewTodoThunk } from '../store/toDoList/actionsToDoList';


export const useFormTodoItem = (props: IFormTodoItemProps) => {
    const { id } = useSelector(({ formTodoItem }: IState) => formTodoItem.todo);
    const { closeModal } = props;
    const [status, setStatus] = useState('in progress');
    const statuses: string[] = ['done', 'in progress'];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ITodo>({ defaultValues: emptyTodoItem });

    const handleChangeStatus = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        // console.log(target.value)
        setStatus(target.value);
    }

    const saveTodoItem = (todo: ITodo): void => {
        if (id) {

        } else {
            dispatch(
                //@ts-expect-error
                createNewTodoThunk(
                    { ...todo, completed: status === 'done' ? true : false }
                )
            )
        }
        navigate('/');
    }

    return {
        id,
        status,
        statuses,
        register,
        errors,
        handleSubmit,
        closeModal,
        saveTodoItem,
        handleChangeStatus
    }
}