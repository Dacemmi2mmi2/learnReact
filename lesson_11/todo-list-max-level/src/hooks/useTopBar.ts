import { useState } from 'react';
import { IUseTopBar } from '../services/interfaces';

export const useTopBar = (): IUseTopBar => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
        setAnchorElement(event.currentTarget);
    }

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
        setAnchorElement(null);
    }

    return {
        anchorElement,
        open,
        handleClick,
        handleClose
    }
}