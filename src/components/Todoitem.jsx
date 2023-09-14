import './Todoitem.css'
import { BiTrash } from "react-icons/bi";

function Todoitem(props) {
    let { id, completed, label } = props;

    return (
        <li className='todo-item'>
            <label>{label}</label>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => { props.toggleTaskCompleted(id) }}
            />
            <div className='deleteBtn'>
                <button onClick={() => { props.deleteTodo(id); }}><BiTrash /></button>
            </div>
        </li>
    )
}

export default Todoitem