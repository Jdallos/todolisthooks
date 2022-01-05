import  useLocalStorageState  from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';


export default initialTodos => {
    // uLSS still does useState but also initialises to local storage
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    // could also define function up here and link as value, but defining in line is also fine
    // Example of above comment
    function removeTodo(todoId) {
        let updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    // Returning an object with the functions wrapped in.
    // Alternative to returning an array
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        },
        toggleComplete:(todoId) => {
            const updatedTodos = todos.map(todo => (
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            ));
            setTodos(updatedTodos);
        },
        // example of not inline function
        removeTodo: removeTodo,
        editTodo: (todoId, updatedTask) => {
            const updatedTodos = todos.map(todo => (
                todo.id === todoId ? { ...todo, task: updatedTask } : todo
            ));
            setTodos(updatedTodos);
        }
    }

}
