import {useState} from 'react';
import './TodoGenerator.css';

const TodoGenerator = (props) => {
    const [inputValue, setinputValue] = useState("");

    const onInputChange = (e) => {
       setinputValue(e.target.value);
    }

    const onAddTodo = () => {
        props.onClickChange(inputValue);
    }

    return (
        <div className='TodoGenerator'>
            <input type='text' onChange={onInputChange}/>
            <button onClick={onAddTodo}>add</button>
        </div>
    )
}

export default TodoGenerator;