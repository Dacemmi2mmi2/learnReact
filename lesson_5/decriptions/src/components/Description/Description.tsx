import { ChangeEvent, ReactElement } from 'react';
import { IDescriptionComponentProps } from '../../services/interfaces';

const Description = (props: IDescriptionComponentProps): ReactElement => {
    let {
        id,
        description,
        deleteDescription,
        updateDescription
    } = props as IDescriptionComponentProps;

    const onCahgeTextArea = ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
        description = target.value as string;
    }
    
    return (
        <div className="Description">
            <textarea
                className="field__text"
                id={id}
                defaultValue={description}
                onChange={onCahgeTextArea}
                onBlur={(): void => updateDescription(id, description)}
            ></textarea>
            <button
                className="btn__delete"
                onClick={(): void => deleteDescription(id)}
            >
                delete
            </button>
        </div>
    );
}

export { Description };
