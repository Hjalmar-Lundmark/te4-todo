import './App.css'
import Todolist from './components/Todolist';
import Footer from './components/Footer';

function App() {

    return (
        <>
            <div className='container'>
                <h1>Att göra lista</h1>
                <Todolist />
            </div>
            <Footer />
        </>
    )
}

export default App
