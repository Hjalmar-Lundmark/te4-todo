import './Todoitem.css'

function Todoitem(props) {
    let {id, done, label} = props;

    return (
    <li className='todo-item'>
        <label>{label}</label>
        <input 
            type="checkbox"
            checked={done}
            onChange={() => { props.toggleTaskCompleted(id)}}
        />
    </li>
    )
}

export default Todoitem