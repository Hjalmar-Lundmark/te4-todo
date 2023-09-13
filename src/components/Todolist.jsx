import { useEffect, useState } from "react"
import Todoitem from "./Todoitem";

function Todolist() {
    // was in app.jsx but moved into its own file then imported into app

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    });

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

    // newer stuff for adding and deleting items
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const deleteAll = () => {
        const newTodos = []
        setTodos(newTodos)
    }

    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value;
        if (newTodo === '') return
        const newTodos = [...todos, {id: todos.length + 1, label: newTodo, completed: false}]
        setTodos(newTodos)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <>
        <input type="text" id="newTodo" placeholder="Skriv in en sak"/>
        <button onClick={() => { addTodo() }}>Lägg till</button>
        <button onClick={() => { deleteAll() }}>Ta bort alla</button>
        <ul className='todo-list'>
            {todos.map((todo, index) =>
                <Todoitem
                    key={index}
                    id={todo.id}
                    label={todo.label}
                    completed={todo.completed}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
        </>
    )
}

export default Todolist