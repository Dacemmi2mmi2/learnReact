import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAddTodoItemHook } from '../../../hooks/addTodoItemHook';
import { IAddTodoItemHook } from '../../../services/interfaces';

export const AddTodoItem = (): ReactElement => {
    const {
        onChange,
        submitData,
        todoItem
    } = useAddTodoItemHook() as IAddTodoItemHook;

    return (
        <Box
            component='form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete='off'
            onSubmit={submitData}
        >
            <TextField
                name='notice'
                label='notice'
                defaultValue={todoItem.notice}
                onChange={onChange}
            />
            <TextField
                type={'number'}
                name='id'
                label='id'
                defaultValue={todoItem.id}
                onChange={onChange}
            />
            <Button
                sx={{ mt: 1, ml: 1 }}
                variant='contained'
                type='submit'
            >
                save
            </Button>
        </Box>
    );
}