import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { variantBtn } from '../../../services/consts';
import { useFormUserPageHook } from '../../../hooks/useFormUserPage';

export const FormUserPage = (): ReactElement => {
    const {
        createOrEditUser,
        toUsersPage
    } = useFormUserPageHook();

    return (
        <>
            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label='name'
                    defaultValue='name'
                />
                <TextField
                    label='surname'
                    defaultValue='surname'
                />
                <TextField
                    label='phone'
                    defaultValue='phone'
                />
            </Box>
            <Button
                variant={variantBtn}
                sx={{ ml: 1 }}
                onClick={createOrEditUser}
            >
                save
            </Button>
            <Button
                variant={variantBtn}
                sx={{ ml: 1 }}
                onClick={toUsersPage}
            >
                cancel
            </Button>
        </>
    );
}