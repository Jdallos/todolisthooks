import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Todo from './Todo';


// NOTE PASSING IN PROPS
export default function TodoList(props) {
    if(props.todos.length){
        return (
            <Paper>
                {/* from MUI, alternative to ul and li */}
                <List>
                    {props.todos.map((todo, index) => (
                        // This is a react fragment, to group things together, it takes the key as it is the child of the list being 'rendered
                        <React.Fragment key={todo.id}>
                            <Todo
                                // task={todo.task}
                                // id={todo.id}
                                // completed={todo.completed}
                                // Below achieves the above
                                {...todo}
                                remove={props.remove}
                                toggle={props.toggle}
                                editTodo={props.editTodo}
                            />
                            {props.todos.length-1 !== index && <Divider />}
                        </React.Fragment>
                    )
                    )}
                </List>
            </Paper>
        )
    }
    return null;
    
}