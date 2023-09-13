import './Todoitem.css'

function Todoitem(props) {
    let {id, completed, label} = props;

    return (
    <li className='todo-item'>
        <label>{label}</label>
        <input 
            type="checkbox"
            checked={completed}
            onChange={() => { props.toggleTaskCompleted(id)}}
            onDelete={() => { props.deleteTodo(id)}}
        />
        <button onClick={() => {props.deleteTodo(id);}}>Delete</button>
    </li>
    )
}

export default Todoitem