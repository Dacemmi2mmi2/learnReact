import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emptyTodoItem } from '../services/consts';
import { ITodo, IFormTodoItemProps } from '../services/interfaces';
import { createNewTodoThunk, updateTodoThunk } from '../store/toDoList/actionsToDoList';
import { getApi } from '../services/loaders';


export const useFormTodoItem = (props: IFormTodoItemProps) => {
    const { closeModal } = props;
    const [status, setStatus] = useState('in progress');
    const [todoItem, setTodoItem] = useState(emptyTodoItem as ITodo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const uri = `todos/${id}`;
    const statuses: string[] = ['done', 'in progress'];

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        watch,
        formState: { errors, isDirty }
    } = useForm<ITodo>({ defaultValues: emptyTodoItem });

    const handleChangeStatus = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setStatus(target.value);
    }

    const { title } = watch();

    const saveTodoItem = (todo: ITodo): void => {
        if (id) {
            dispatch(
                // @ts-expect-error
                updateTodoThunk(id, { ...todoItem, title: title })
            )
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

    useEffect(() => {
        if (id) {
            getApi(uri)
                .then((todoItem): void => {
                    setTodoItem(todoItem as ITodo);
                    setValue('title', (todoItem as ITodo).title);
                    setFocus('title');
                });
        } else {
            setTodoItem(emptyTodoItem as ITodo);
            setValue('title', emptyTodoItem.title)
            setFocus('title');
        }
        // eslint-disable-next-line
    }, []);

    return {
        id,
        status,
        statuses,
        register,
        errors,
        isDirty,
        handleSubmit,
        closeModal,
        saveTodoItem,
        handleChangeStatus
    }
}