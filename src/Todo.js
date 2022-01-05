import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';


export default function Todo({ task, completed, id, remove, toggle, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState();

    return (
        <ListItem style={{height:"64px"}}>
            {isEditing
                ?
                <EditTodoForm
                    task={task}
                    editTodo={editTodo}
                    id={id}
                    toggleIsEditing={toggleIsEditing}
                />
                :
                // Need the fragment to group react?
                <>
                    <Checkbox onClick={() => toggle(id)} checked={completed} />
                    <ListItemText style={{ textDecoration: completed && "line-through" }}>
                        {task}
                    </ListItemText>
                </>
            }
              <ListItemSecondaryAction>
                <IconButton onClick={() => remove(id)} aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => toggleIsEditing()} aria-label="Edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}