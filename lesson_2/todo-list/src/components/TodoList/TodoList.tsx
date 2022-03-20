import React, { ReactElement } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import './TodoList.css';

interface IOneItemArrayProps {
    id: string,
    title: string,
    completed: boolean,
}

interface IStateTodoList {
    tasks: Array<IOneItemArrayProps>
}

class TodoList extends React.Component {
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

    render(): ReactElement {
        const { tasks } = this.state;
        return <>
            <ul className="TodoList">
                {
                    tasks.map((item: IOneItemArrayProps): ReactElement => {
                        return <TodoItem
                            key={item.id}
                            id={item.id}
                            text={item.title}
                            status={item.completed}
                        />
                    })
                }
            </ul>
        </>
    }
}

export { TodoList }