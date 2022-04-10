import { ChangeEvent, ReactElement } from 'react';
import { IStickerComponentProps } from '../../services/interfaces';

const Sticker = (props: IStickerComponentProps): ReactElement => {
    let {
        id,
        description,
        deleteSticker,
        updateStickers
    } = props as IStickerComponentProps;

    const onCahgeTextArea = ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
        description = target.value as string;
    }

    return (
        <div className="Sticker">
            <textarea
                className="field__text"
                id={id}
                defaultValue={description}
                onChange={onCahgeTextArea}
                onBlur={(): void => updateStickers(id, description)}
            ></textarea>
            <button
                className="btn__delete"
                onClick={(): void => deleteSticker(id)}
            >
                delete
            </button>
        </div>
    );
}

export { Sticker };
