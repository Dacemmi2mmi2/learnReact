import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/formHook';
import { linkStyles, fontFamily } from '../../services/additionalStyles';
import { IFormProps, IUserData } from '../../services/interfaces';

export const FormUsers = (props: IFormProps): ReactElement => {
    const {
        dataUserFrom,
        submitData,
        onChange
    } = useForm(props);

    const {
        address,
        company,
        name,
        username,
        id,
        phone,
        email,
        website
    } = dataUserFrom as IUserData;

    return (
        <Box
            component='form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete='off'
            onSubmit={submitData}
        >
            <div className='user'>
                <p style={fontFamily}>User</p>
                <TextField
                    name='name'
                    label='name'
                    defaultValue={name}
                    onChange={onChange}
                />
                <TextField
                    name='username'
                    label='username'
                    defaultValue={username}
                    onChange={onChange}
                />
                <TextField
                    name='id'
                    label='id'
                    defaultValue={id}
                    onChange={onChange}
                />
                <TextField
                    name='phone'
                    label='phone'
                    defaultValue={phone}
                    onChange={onChange}
                />
                <TextField
                    name='email'
                    label='email'
                    defaultValue={email}
                    onChange={onChange}
                />
                <TextField
                    name='website'
                    label='website'
                    defaultValue={website}
                    onChange={onChange}
                />
            </div>
            <div className='addres'>
                <p style={fontFamily}>Addres</p>
                <TextField
                    name='city'
                    label='city'
                    defaultValue={address?.city}
                    onChange={onChange}
                />
                <TextField
                    name='street'
                    label='street'
                    defaultValue={address?.street}
                    onChange={onChange}
                />
                <TextField
                    name='suite'
                    label='suite'
                    defaultValue={address?.suite}
                    onChange={onChange}
                />
                <TextField
                    name='zipcode'
                    label='zipcode'
                    defaultValue={address?.zipcode}
                    onChange={onChange}
                />
                <div>
                    <p style={fontFamily}>Location</p>
                    <TextField
                        name='lat'
                        label='lat'
                        defaultValue={address?.geo.lat}
                        onChange={onChange}
                    />
                    <TextField
                        name='lng'
                        label='lng'
                        defaultValue={address?.geo.lng}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className='company'>
                <p style={fontFamily}>Company</p>
                <TextField
                    name='bs'
                    label='bs'
                    defaultValue={company?.bs}
                    onChange={onChange}
                />
                <TextField
                    name='catchPhrase'
                    label='catchPhrase'
                    defaultValue={company?.catchPhrase}
                    onChange={onChange}
                />
                <TextField
                    name='company name'
                    label='name'
                    defaultValue={company?.name}
                    onChange={onChange}
                />
            </div>
            <ButtonGroup
                variant='contained'
                sx={{ mt: 5 }}
            >
                <Button type='submit'>
                    save
                </Button>
                <Button>
                    <Link
                        to={'/users'}
                        style={linkStyles}
                    >
                        cancel
                    </Link>
                </Button>
            </ButtonGroup>
        </Box>
    );
}