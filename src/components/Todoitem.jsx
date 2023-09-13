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
        />
    </li>
    )
}

export default Todoitem