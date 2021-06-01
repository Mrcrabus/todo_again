import Todo from "./Todo";

const TodoList = ({todos, setTodos, status, filterTodos}) => {
    return (<div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <Todo todos={todos}
                          setTodos={setTodos}
                          text={todo.text}
                          key={todo.id}
                          todo={todo}
                          status={status}
                    />
                ))

                }

            </ul>

        </div>

    )
}

export default TodoList;