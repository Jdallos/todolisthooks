import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({ task, editTodo, id, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);

    function handleSubmit(e){
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
    }

    return (
        <form  
            onSubmit={handleSubmit}
            style={{marginLeft:"1rem", width:"50%"}}
        >
               
            <TextField
                margin="normal"
                fullWidth
                value={value}
                onChange={handleChange}
                autoFocus
            />
        </form>

    )

}
