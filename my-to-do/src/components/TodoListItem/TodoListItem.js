import { useState } from "react";
import './TodoListItem.css';

const TodoListItem = (props) => {

    const generateTodo = () => {
        const todos = props.todos;
        console.log(todos);
        if(todos.length > 0) {
            return todos.map((todo) => 
                <div className='TodoListItem'>{todo}</div>
            )
        }
        return null;
    }

    return (
        <div>
            {generateTodo()}
        </div>
    )
}

export default TodoListItem;