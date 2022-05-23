import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { useForm } from '../../hooks/formHook';
import { IFormProps, IUseFormUsers } from '../../services/interfaces';

export const FormUsers = (props: IFormProps): ReactElement => {
    const {
        dataUserForm: {
            email,
            id,
            name,
            phone,
            username,
            website
        },
        submitData,
        onChangeMainFields,
        navigate
    } = useForm(props) as IUseFormUsers;

    return (
        <Box
            component='form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete='off'
            onSubmit={submitData}
        >
            <div className='user'>
                <p style={{ fontFamily: 'Arial' }}>User</p>
                <TextField
                    name='name'
                    label='name'
                    defaultValue={name}
                    onChange={onChangeMainFields}
                />
                <TextField
                    name='username'
                    label='username'
                    defaultValue={username}
                    onChange={onChangeMainFields}
                />
                <TextField
                    name='id'
                    label='id'
                    defaultValue={id}
                    onChange={onChangeMainFields}
                />
                <TextField
                    name='phone'
                    label='phone'
                    defaultValue={phone}
                    onChange={onChangeMainFields}
                />
                <TextField
                    name='email'
                    label='email'
                    defaultValue={email}
                    onChange={onChangeMainFields}
                />
                <TextField
                    name='website'
                    label='website'
                    defaultValue={website}
                    onChange={onChangeMainFields}
                />
            </div>
            <ButtonGroup
                variant='contained'
                sx={{ mt: 5 }}
            >
                <Button type='submit'>
                    save
                </Button>
                <Button onClick={(): void => navigate('/users')}>
                    cancel
                </Button>
            </ButtonGroup>
        </Box>
    );
}