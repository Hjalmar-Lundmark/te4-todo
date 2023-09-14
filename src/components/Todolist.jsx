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
        setTodos([]); 
        localStorage.setItem('index', 0) // create number that rises every added item to use for items id / resets it to zero 
    }

    const deleteSelected = () => {
        const newTodos = todos.filter(todo => todo.completed !== true)
        setTodos(newTodos)
    }

    const checkAll = () => {
        console.log(todos)
        const newTodos = todos.map(todo => {
            const newTodo = todo
            newTodo.completed = true
            return newTodo
        })
        setTodos(newTodos);
    }

    const unCheckAll = () => {
        const newTodos = todos.map(todo => {
            const newTodo = todo
            newTodo.completed = false
            return newTodo
        })
        setTodos(newTodos);
    }

    const addTodo = () => {
        if (localStorage.getItem('index') === null) { // is this the best way to check this
        localStorage.setItem('index', 0)    // The first time user hits this, it creates a number for items id
        } // without this it becomes null, which I think works identically well but I want it on zero

        const newTodo = document.getElementById('newTodo').value;
        if (newTodo === '') return
        const newTodos = [...todos, { id: localStorage.getItem('index'), label: newTodo, completed: false }]    //uses locally stored number to get index
        setTodos(newTodos)
        localStorage.setItem('index', parseInt(localStorage.getItem('index'))+1)    // adds number +1 for ever item created
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <input type="text" id="newTodo" placeholder="Skriv in en sak" />
            <button onClick={() => { addTodo() }}>Lägg till</button>
            <button onClick={() => { deleteAll() }}>Ta bort alla</button>
            <button onClick={() => { deleteSelected() }}>Ta bort klara</button>
            <button onClick={() => { checkAll() }}>Välj alla</button>
            <button onClick={() => { unCheckAll() }}>Avvälj alla</button>
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