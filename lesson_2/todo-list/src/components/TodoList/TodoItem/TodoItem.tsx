import React, { MouseEvent, ReactElement } from 'react';
import './TodoItem.css';

interface IPropsTodoItem {
    id: string
    text: string,
    status: boolean,
    removeTodoItem: Function
}

interface IStateTodoItem {
    [key: string]: boolean
}

class TodoItem extends React.Component<IPropsTodoItem> {
    state: IStateTodoItem = {
        checked: true,
        styleText: true,
        styleButton: true
    }

    constructor(props: IPropsTodoItem) {
        super(props);
        this.clickTodoItem = this.clickTodoItem.bind(this);
    }

    clickTodoItem({ target }: MouseEvent): void {
        const { checked, styleText, styleButton } = this.state as IStateTodoItem;
        const { children } = target as HTMLLIElement;
        (children[0] as HTMLInputElement).checked = checked;
        (children[1] as HTMLLabelElement).style.textDecorationLine = styleText ? 'line-through' : 'none';
        const button = document.querySelector(`.TodoList button:nth-child(${Number(children[0].id) * 2})`) as HTMLButtonElement;
        button.style.display = styleButton ? 'block' : 'none';

        this.setState({
            checked: !checked,
            styleText: !styleText,
            styleButton: !styleButton
        });
    }

    render(): ReactElement {
        const { id, text, removeTodoItem } = this.props as IPropsTodoItem;
        return <>
            <li className="TodoItem" onClick={this.clickTodoItem}>
                <input type="checkbox" id={id}/>
                <label htmlFor={id}>{text}</label>
            </li>
            <button className={id} onClick={(): void => removeTodoItem(Number(id))}>Remove item</button>
        </>
    }
}

export { TodoItem }