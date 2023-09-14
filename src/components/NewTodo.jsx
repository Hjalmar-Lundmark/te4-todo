

function NewTodo(props) {


    return (
        <>
            <input type="text" id="newTodo" placeholder="Skriv in en sak" />
            <button onClick={() => { props.addTodo() }}>Lägg till</button>
        </>
    )
}

export default NewTodo