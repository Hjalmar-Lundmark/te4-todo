import { useState } from "react"
import Todoitem from "./Todoitem";

function Todolist() {
    // was in app.jsx but moved into its own file then imported into app

    const [todos, setTodos] = useState([
        { id: 0, label: 'Kaffe', completed: false },
        { id: 1, label: 'Kakor', completed: false },
        { id: 2, label: 'Punsch rullar', completed: false },
        { id: 3, label: 'Kaffe', completed: true },
    ]);

    const toggleTaskCompleted = (id) => {   // göra kopia, ändra kopia, sätta orginal till ändrad kopia
        const newTodos = todos.map(todo => {
            // One-line solution but is harder to read
            //return todo.id === id ? { ...todo, completed: !todo.completed } : todo

            // more readable
            const newTodo = todo
            if (newTodo.id === id) {    // or todo.id === id
                newTodo.completed = !newTodo.completed
            }
            return newTodo;
        })
        setTodos(newTodos);
    }

    return (
        <ul className='todo-list'>
            {todos.map((todo, index) =>
                <Todoitem
                    key={index}
                    id={todo.id}
                    label={todo.label}
                    completed={todo.completed}
                    toggleTaskCompleted={toggleTaskCompleted}
                />
            )}
        </ul>
    )
}

export default Todolist