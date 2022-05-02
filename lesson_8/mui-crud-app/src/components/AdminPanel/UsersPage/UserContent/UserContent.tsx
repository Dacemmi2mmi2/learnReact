import { ReactElement } from 'react';
import { useUserContent } from './userContentLogic';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import {
    Button,
    ButtonGroup
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    IUserData,
    IUserContentHook
} from '../../../../services/interfaces';
import { linkStyles } from '../../../../services/additionalStyles';

export const UserContent = (): ReactElement => {
    const {
        dataUser,
        expanded,
        handleExpandClick
    } = useUserContent() as IUserContentHook;

    const {
        address,
        company,
        email,
        id,
        name,
        phone,
        username,
        website
    } = dataUser as IUserData;

    return (
        <Box>
            <Box sx={{ mb: 1 }}>
                <ButtonGroup variant='contained'>
                    <Button onClick={(): void => handleExpandClick()}>
                        {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
                    </Button>
                    <Button>
                        <Link
                            to='/users'
                            style={linkStyles}
                        >
                            Users
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            to='/'
                            style={linkStyles}
                        >
                            Dashboard
                        </Link>
                    </Button>
                </ButtonGroup>
            </Box>
            <TreeView
                aria-label='file system navigator'
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                sx={{ height: 700, flexGrow: 2, maxWidth: 600, overflowY: 'auto' }}
            >
                <TreeItem nodeId='1' label='User'>
                    <TreeItem nodeId='2' label={`name: ${name}`} />
                    <TreeItem nodeId='3' label={`username: ${username}`} />
                    <TreeItem nodeId='4' label={`id: ${id}`} />
                    <TreeItem nodeId='5' label={`phone: ${phone}`} />
                    <TreeItem nodeId='6' label={`email: ${email}`} />
                    <TreeItem nodeId='7' label={`website: ${website}`} />
                </TreeItem>
                <TreeItem nodeId='8' label='Address'>
                    <TreeItem nodeId="9" label={`city: ${address?.city}`} />
                    <TreeItem nodeId="10" label={`street: ${address?.street}`} />
                    <TreeItem nodeId="11" label={`suite: ${address?.suite}`} />
                    <TreeItem nodeId="12" label={`zipcode: ${address?.zipcode}`} />
                    <TreeItem nodeId="13" label='Location'>
                        <TreeItem nodeId="14" label={`lat: ${address?.geo.lat}`} />
                        <TreeItem nodeId="15" label={`lng: ${address?.geo.lng}`} />
                    </TreeItem>
                </TreeItem>
                <TreeItem nodeId='16' label='Company'>
                    <TreeItem nodeId='17' label={`bs: ${company?.bs}`} />
                    <TreeItem nodeId='18' label={`catchPhrase: ${company?.catchPhrase}`} />
                    <TreeItem nodeId='19' label={`name: ${company?.name}`} />
                </TreeItem>
            </TreeView>
        </Box>
    );
}