import { useState } from 'react'
import './App.css'
import Todoitem from './components/Todoitem'

function App() {
    const todos = [
        { id: 0, label: 'Kaffe', done: false },
        { id: 1, label: 'Kakor', done: false },
        { id: 2, label: 'Punsch rullar', done: false },
        { id: 3, label: 'Kaffe', done: true },
        { id: 4, label: 'Kaffe', done: false },
    ]

    const toggleTaskCompleted = (index) => {
        console.log(index)
        todos[index].done = true;
    }

    return (
        <div className='container'>
            <h1>Att göra lista</h1>
            <ul className='todo-list'>
                {todos.map((todo, index) =>
                    <Todoitem
                        key={index}
                        id={todo.id}
                        label={todo.label}
                        done={todo.done}
                        toggleTaskCompleted={toggleTaskCompleted}
                    />
                )}
            </ul>

        </div>
    )
}

export default App
