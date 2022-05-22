import { ReactElement } from 'react';
import { useFormTodoItemPage } from '../../hooks/useFormTodoItemPage';
import { FormTodoItem } from '../FormTodoItem/FormTodoItem';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { IUseFormTodoItemPage } from '../../services/interfaces';

export const FormTodoItemPage = (): ReactElement => {
    const { open, handleClose } = useFormTodoItemPage() as IUseFormTodoItemPage;

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: window.screen.width * .6,
                    bgcolor: 'white',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography sx={{ mb: 2 }} variant="h6" component="h2">
                        Form Todo Item
                    </Typography>
                    <FormTodoItem closeModal={handleClose} />
                </Box>
            </Fade>
        </Modal>
    );
}