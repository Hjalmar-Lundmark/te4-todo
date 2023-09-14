import './Todoitem.css'
import { BiTrash } from "react-icons/bi";

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
        <button onClick={() => {props.deleteTodo(id);}}><h1><BiTrash /></h1></button>
    </li>
    )
}

export default Todoitem