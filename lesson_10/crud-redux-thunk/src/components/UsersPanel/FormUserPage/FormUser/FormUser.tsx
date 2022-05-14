import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormHook } from '../../../../hooks/useFormHook';
import { variantBtn } from '../../../../services/consts';
import { IUser, IUseFormHook } from '../../../../services/interfaces';

export const FormUser = (props: { user: IUser }): ReactElement => {
    const {
        user,
        saveUser,
        toUsersPage,
        writeUser
    } = useFormHook(props) as IUseFormHook;

    const { name, surname, phone } = user as IUser;

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
                    name='name'
                    value={name}
                    onChange={writeUser}
                />
                <TextField
                    label='surname'
                    name='surname'
                    value={surname}
                    onChange={writeUser}
                />
                <TextField
                    label='phone'
                    name='phone'
                    value={phone}
                    onChange={writeUser}
                />
            </Box>
            <Button
                type='submit'
                variant={variantBtn}
                sx={{ ml: 1 }}
                onClick={saveUser}
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