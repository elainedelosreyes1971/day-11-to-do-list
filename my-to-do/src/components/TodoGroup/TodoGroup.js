import './TodoGroup.css';

const TodoGroup = (props) => {
    
    const generateKey = (todo) => {
        return (Math.random() + todo);
    }

    return (
        <div>
            {props.todos.length > 0 ? (props.todos.map((todo) => 
                <div className='TodoGroup' key={generateKey(todo)}>{todo}</div>)) : null} 
        </div>
    )
}

export default TodoGroup;