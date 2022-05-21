import { ReactElement } from 'react';
import { StyledMenu } from '../StyledMenu/StyledMenu';
import { ElevationScroll } from '../ElevationScroll/ElevationScroll';
import { useTopBar } from '../../hooks/useTopBar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DoneIcon from '@mui/icons-material/Done';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { ITopBarProps, IUseTopBar } from '../../services/interfaces';

export const TopBar = (props: ITopBarProps): ReactElement => {
    const {
        anchorElement,
        open,
        handleClick,
        handleClose
    } = useTopBar() as IUseTopBar;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Button
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<MenuIcon />}
                        >
                            menu
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorElement}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <FormatListNumberedIcon />
                                All tasks
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <DoneIcon />
                                Done tasks
                            </MenuItem>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                                <RotateRightIcon />
                                In progress tasks
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <PlaylistAddIcon />
                                Add task
                            </MenuItem>
                        </StyledMenu>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, ml: 2 }}
                        >
                            ToDo List App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Box>
    );
}