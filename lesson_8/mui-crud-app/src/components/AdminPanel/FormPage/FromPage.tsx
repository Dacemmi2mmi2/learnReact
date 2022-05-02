import { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormPage } from './formPageLogic';
import { linkStyles, fontFamily } from '../../../services/additionalStyles';
import { IUserData } from '../../../services/interfaces';

export const FormPage = (): ReactElement => {
    const { dataUser, navigate } = useFormPage();
    console.log(dataUser);
    let {
        address,
        company,
        email,
        id,
        name,
        phone,
        username,
        website
    } = dataUser as IUserData;

    const test = (event: any) => {
        event.preventDefault();
        navigate('/users');
    }

    const [value, setValue] = useState('name');
    return (
        <Box
            component="form"
            onSubmit={test}
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <p style={fontFamily}>User</p>
                <TextField
                    id='name'
                    label='name'
                    defaultValue={''}
                    onChange={(e) => {
                        name = e.target.value
                    }}
                />
                <TextField
                    id='username'
                    label='username'
                    defaultValue={username}
                />
                <TextField
                    id='id'
                    label='id'
                    defaultValue={id}
                />
                <TextField
                    id='phone'
                    label='phone'
                    defaultValue={phone}
                />
                <TextField
                    id='email'
                    label='email'
                    defaultValue={email}
                />
                <TextField
                    id='website'
                    label='website'
                    defaultValue={website}
                />
            </div>
            <div>
                <p style={fontFamily}>Addres</p>
                <TextField
                    id='city'
                    label='city'
                    defaultValue={address?.city}
                />
                <TextField
                    id='street'
                    label='street'
                    defaultValue={address?.street}
                />
                <TextField
                    id='suite'
                    label='suite'
                    defaultValue={address?.suite}
                />
                <TextField
                    id='zipcode'
                    label='zipcode'
                    defaultValue={address?.zipcode}
                />
                <div>
                    <p style={fontFamily}>Location</p>
                    <TextField
                        id='lat'
                        label='lat'
                        defaultValue={address?.geo.lat}
                    />
                    <TextField
                        id='lng'
                        label='lng'
                        defaultValue={address?.geo.lng}
                    />
                </div>
            </div>
            <div>
                <p style={fontFamily}>Company</p>
                <TextField
                    id='bs'
                    label='bs'
                    defaultValue={company?.bs}
                />
                <TextField
                    id='catchPhrase'
                    label='catchPhrase'
                    defaultValue={company?.catchPhrase}
                />
                <TextField
                    id='companyName'
                    label='name'
                    defaultValue={company?.name}
                />
            </div>
            <ButtonGroup
                variant='contained'
                sx={{ mt: 5 }}
            >
                <Button type='submit'>
                    {/* <Link
                        to={'/users'}
                        style={linkStyles}
                    > */}
                        save
                    {/* </Link> */}
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

