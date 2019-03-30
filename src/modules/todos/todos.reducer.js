import { createReducer } from "redux-starter-kit";

import { addTodo } from "./todos.actions";

const initialState = {
    list: [
        "todo1",
        "todo2"
    ]
};

export default createReducer(initialState, {
    [addTodo]: (state, action) => {
        state.list.push(action.payload);
    }
});
