import { ReactElement } from 'react';
import { useFormTodoItemPage } from '../../hooks/useFormTodoItemPage';
import { FormTodoItem } from '../FormTodoItem/FormTodoItem';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { IUseFormTodoItemPage } from '../../services/interfaces';
import { styleModalForm } from '../../services/consts';

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
                <Box sx={styleModalForm}>
                    <Typography sx={{ mb: 2 }} variant="h6" component="h2">
                        Form Todo Item
                    </Typography>
                    <FormTodoItem closeModal={handleClose} />
                </Box>
            </Fade>
        </Modal>
    );
}