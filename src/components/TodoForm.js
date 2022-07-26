import { useState } from "react";

function TodoForm(props) {
    const [input, setInput] = useState('')

    const changeHandler = event => {
        setInput(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={changeHandler}
            />

            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm;