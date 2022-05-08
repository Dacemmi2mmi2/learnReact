import { ChangeEvent, useState, FormEvent, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/actions';
import { dataTodoItem } from '../services/consts';
import { IAddTodoItemHook, ITodoItem } from '../services/interfaces';

export const useAddTodoItemHook = (): IAddTodoItemHook => {
    const [todoItem, setDataTodoItem] = useState(dataTodoItem as ITodoItem); 
    const dispatch = useDispatch();

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setDataTodoItem({ ...todoItem, [target.name]: target.value });
    }

    const submitData = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(addItem(todoItem));
        setDataTodoItem({ notice: '' } as SetStateAction<ITodoItem>);
    }

    return {
        onChange,
        submitData,
        todoItem
    }
}