import React, { ReactElement } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import './TodoList.css';

interface IOneItemArrayProps {
    id: string,
    title: string,
    completed: boolean,
}

interface IPropsTodoList {
    id: string,
    title: string,
    completed: boolean,
}

interface IStateTodoList {
    tasks: Array<IOneItemArrayProps>
}

class TodoList extends React.Component<IPropsTodoList | any> {
    state: IStateTodoList = {
        tasks: [
            {
                id: "1",
                title: "make homework",
                completed: false
            },
            {
                id: "2",
                title: "go to the shop",
                completed: false
            },
            {
                id: "3",
                title: "make tasks about programming",
                completed: false
            },
            {
                id: "4",
                title: "go to the cinema",
                completed: false
            },
            {
                id: "5",
                title: "talk to friends",
                completed: false
            }
        ]
    }

    constructor(props: IPropsTodoList) {
        super(props);
        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
        this.changeStatusTask = this.changeStatusTask.bind(this);
    }

    removeTodoItem(id: string): void {
        const { tasks } = this.state as IStateTodoList;
        this.setState({
            tasks: tasks.filter(item => item.id !== id && item)
        });
    }

    addNewTodoItem(): void {
        const { tasks } = this.state as IStateTodoList;
        const { id, title, completed } = this.props as IPropsTodoList;
        tasks.push({
            id: id,
            title: title,
            completed: completed
        } as IOneItemArrayProps);
        this.setState({ tasks: tasks });
    }

    changeStatusTask(value: string): void {
        const { tasks } = this.state as IStateTodoList;
        tasks.map(item => item.id === value && (item.completed = true));
        this.setState({ tasks: tasks });
    }

    render(): ReactElement {
        const { tasks } = this.state as IStateTodoList;
        return <>
            <ul className="TodoList">
                {
                    tasks.map((item: IOneItemArrayProps): ReactElement => {
                        return <TodoItem
                            key={item.id}
                            id={item.id}
                            text={item.title}
                            status={item.completed}
                            removeTodoItem={this.removeTodoItem}
                            changeStatus={this.changeStatusTask}
                        />
                    })
                }
            </ul>
        </>
    }
}

export { TodoList }