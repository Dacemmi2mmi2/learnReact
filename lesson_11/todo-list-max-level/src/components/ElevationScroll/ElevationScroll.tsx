import React, { ReactElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ITopBarProps } from '../../services/interfaces';

export const ElevationScroll = (props: ITopBarProps): ReactElement => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    //@ts-expect-error
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}