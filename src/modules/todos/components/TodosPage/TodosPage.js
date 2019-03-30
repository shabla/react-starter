import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../todos.actions";
import { getTodos } from "../../todos.selectors";
import TodosList from "../TodosList/TodosList";

const TodosPage = ({ todos, addTodo }) => {

    const inputRef = useRef(null);
    const [todo, setTodo] = useState("");

    const onAdd = () => {
        if (todo.length > 0) {
            addTodo(todo);
            setTodo("");
            inputRef.current.focus();
        }
    }

    const onKeyPress = e => {
        if (e.key === "Enter") {
            onAdd();
        }
    }

    return (
        <>
            <div>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} onKeyPress={onKeyPress} ref={inputRef} />
                <button onClick={onAdd}>Add</button>
            </div>

            <h3>Todos</h3>
            <TodosList todos={todos} />
        </>
    )
}

const stateToProps = state => ({
    todos: getTodos(state),
});

const dispatchToProps = {
    addTodo
};

export default connect(stateToProps, dispatchToProps)(TodosPage);