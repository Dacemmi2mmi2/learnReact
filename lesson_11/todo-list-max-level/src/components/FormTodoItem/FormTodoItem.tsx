import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CancelIcon from "@mui/icons-material/CancelOutlined";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import { useFormTodoItem } from '../../hooks/useFormTodoItem';
import { IFormTodoItemProps } from '../../services/interfaces';

export const FormTodoItem = (props: IFormTodoItemProps): ReactElement => {
    const {
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
    } = useFormTodoItem(props);

    return (
        <form
            style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}
            onSubmit={handleSubmit(saveTodoItem)}
        >
            <TextField
                sx={{ width: '100%' }}
                select
                label="Status"
                value={status}
                onChange={handleChangeStatus}
                disabled={id ? true : false}
            >
                {
                    statuses.map((status, index): ReactElement => {
                        return (
                            <MenuItem
                                key={index}
                                value={status}
                            >
                                {status}
                            </MenuItem>
                        );
                    })
                }
            </TextField>
            <TextField
                label="Description"
                variant="outlined"
                sx={{ mt: 2, width: '100%' }}
                {
                ...register('title',
                    {
                        required: true,
                        maxLength: {
                            value: 255,
                            message: 'This field must be less than 255 symbols'
                        }
                    })
                }
                error={errors.title && errors?.title?.message !== ""}
                helperText={errors?.title?.message}
            />
            <Box sx={{ mt: 2, display: 'flex' }}>
                <Button
                    variant='contained'
                    sx={{ width: '100px' }}
                    startIcon={<SaveIcon />}
                    type='submit'
                    disabled={!isDirty}
                >
                    Save
                </Button>
                <Button
                    variant='contained'
                    sx={{ width: '100px', ml: 1 }}
                    startIcon={<CancelIcon />}
                    onClick={closeModal}
                >
                    Cancel
                </Button>
            </Box>
        </form>
    );
}