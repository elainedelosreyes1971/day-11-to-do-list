import { useState } from "react";
import TodoGenerator from "../TodoGenerator/TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const onClickChange = (input) => {
        const prevTodos = [...todos];
        prevTodos.push(input);
        setTodos(prevTodos);
    }

    return (
        <div>
            <TodoGroup todos={todos} />
            <TodoGenerator onClickChange={onClickChange} />
        </div>
    )
}

export default TodoList;