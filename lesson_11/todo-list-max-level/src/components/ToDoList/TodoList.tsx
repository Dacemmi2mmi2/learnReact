import { ReactElement } from 'react';
import { ITodo } from '../../services/interfaces';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pl: 2 }}>
                    <Typography component={'div'}>
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export const ToDoList = ({ todos }: { todos: ITodo[] }): ReactElement => {
    const tasks = [...todos];

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ display: 'flex', height: window.screen.height * .9 }}
        >
            <Box>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="all tasks" {...a11yProps(0)} />
                    <Tab label="in progress" {...a11yProps(1)} />
                    <Tab label="done" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box sx={{ overflowY: 'scroll' }}>
                <TabPanel value={value} index={0}>
                    {
                        tasks.map((todo: ITodo): ReactElement => {
                            return (
                                <ToDoItem
                                    key={todo.id}
                                    id={todo.id}
                                    text={todo.title}
                                    status={todo.completed}
                                />
                            );
                        })
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {
                        tasks.filter((todo: ITodo) => !todo.completed)
                            .map((todo: ITodo): ReactElement => {
                                return (
                                    <ToDoItem
                                        key={todo.id}
                                        id={todo.id}
                                        text={todo.title}
                                        status={todo.completed}
                                    />
                                );
                            })
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {
                        tasks.filter((todo: ITodo) => todo.completed)
                            .map((todo: ITodo): ReactElement => {
                                return (
                                    <ToDoItem
                                        key={todo.id}
                                        id={todo.id}
                                        text={todo.title}
                                        status={todo.completed}
                                    />
                                );
                            })
                    }
                </TabPanel>
            </Box>
        </Box>
    );
}