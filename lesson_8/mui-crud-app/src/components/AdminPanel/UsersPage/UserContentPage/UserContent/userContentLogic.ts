import { useState } from 'react';
import { IUserContentHook } from '../../../../../services/interfaces';

export const useUserContent = (): IUserContentHook => {
    const [expanded, setExpanded] = useState([] as string[] | []);

    const handleExpandClick = (): void => {
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? ['1', '8', '13', '16'] : [],
        );
    };

    return {
        expanded,
        handleExpandClick
    }
}