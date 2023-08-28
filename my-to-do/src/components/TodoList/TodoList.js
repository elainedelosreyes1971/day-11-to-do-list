import { useState } from "react";
import TodoGenerator from "../TodoGenerator/TodoGenerator";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const onClickChange = (input) => {
        const prevTodos = [...todos];
        prevTodos.push(input);
        setTodos(prevTodos);
    }

    return (
        <div>
            <TodoListItem todos={todos} />
            <TodoGenerator onClickChange={onClickChange} />
        </div>
    )
}

export default TodoList;