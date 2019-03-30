import React from "react";

const TodosList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>
    )
}

export default TodosList;