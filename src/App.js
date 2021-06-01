import './App.css';
import Form from "./components/Form";
import {useState, useEffect} from "react";
import TodoList from "./components/TodoList";

const App = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filterTodos, setFilterTodos] = useState([])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodos(todos.filter(todo => todo.completed !== false))
                break;
            case 'uncompleted':
                setFilterTodos(todos.filter(todo => todo.completed !== true))
                break;
            default:
                setFilterTodos(todos)
                break
        }
    }

    useEffect(()=>{
        filterHandler()
    }, [filterHandler, status, todos])



    return (
        <div className='App'>
            <header>
                <h1>TODO List</h1>
            </header>
            <Form inputText={inputText}
                  setInputText={setInputText}
                  todos={todos}
                  setTodos={setTodos}
                  setStatus={setStatus}

            />
            <TodoList todos={todos}
                      setTodos={setTodos}
                      status={status}
                      filterTodos={filterTodos}

            />

        </div>

    );
}

export default App;
