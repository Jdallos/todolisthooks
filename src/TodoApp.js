            // removed useState after refeactoring into useTodoState
            // removed useEffect after refeactoring inot useLocalStorageState

import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';
import  useLocalStorageState  from './hooks/useLocalStorageState';

        // HEAVILY INDENTED IS WHAT WAS USED BEFORE THE USETODOSTATE REFEACTORING OF THE HOOKS FUNCTIONS
                    // import { v4 as uuidv4 } from 'uuid';


export default function TodoApp() {

    const initialTodos = [{id:1, task: "Welcome to todos", completed: false}];
// DEMO FOR LS
    const [mood, setMood] = useLocalStorageState("mood", "happy");

                                            // B4 the useLocalStorageHook
                                                            // // Using local storage
                                                            // const initialTodos = JSON.parse(window.localStorage.getItem("todos") 
                                                            // || '[{"id":"7b7b4ecb-6812-4757-98af-c057b987321e","task":"Walk the dog","completed":false},{"id":"3100fca2-3d21-4929-94a3-fc09282b085e","task":"Go shopping","completed":false},{"id":"b0c745ab-9116-40b7-9b9e-a69b1cca8e38","task":"Heat sauna","completed":false}]');
                                                            // // How to set so initial array is populated?-JSON uses "" around keys
                                                            // // still has to be in big ling \n not helping?
                                                            
                                                            
    //NOW USETODOSTATE is linked to  localstatrge hook 
    // Still basic destructuring from the hook, but obj not array
    const {todos, addTodo, toggleComplete, removeTodo, editTodo} = useTodoState(initialTodos);
                                     // const [todos, setTodos] = useState(initialTodos);


                                            // b4 LS REFACTOR
                                        // // Will run evry re render, unless second argument is specified
                                        // useEffect(() => {
                                        //     // Requires key and stringified value
                                        //     window.localStorage.setItem("todos", JSON.stringify(todos));
                                        // }, 
                                        // // second argument to say when this useEffect is triggered
                                        // // In this case this is the only state anyway
                                        // [todos])


                            // TODOSTATE REFACTOR
                            // const addTodo = (newTodoText) => {
                            //     setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
                            // };

                            // function toggleComplete(todoId) {
                            //     const updatedTodos = todos.map(todo => (
                            //         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
                            //     ));
                            //     setTodos(updatedTodos);

                            // }

                            // function removeTodo(todoId) {
                            //     let updatedTodos = todos.filter((todo) => todo.id !== todoId);
                            //     setTodos(updatedTodos);
                            // };

                            // function editTodo(todoId, updatedTask){
                            //     const updatedTodos = todos.map(todo => (
                            //         todo.id === todoId ? { ...todo, task: updatedTask } : todo
                            //     ));
                            //     setTodos(updatedTodos);
                            // }

    return (
        // from Material UI
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar colors='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography colors='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            {/* defualt 12 units */}
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        remove={removeTodo}
                        toggle={toggleComplete}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
{/* DEMO FOR LS */}
            <button onClick={() => setMood("angry")}>Click to anger</button>
        </Paper>

    )
}