import { configureStore } from 'redux-starter-kit';

import { reducer as home } from "./modules/home"
import { reducer as todos } from "./modules/todos"

const store = configureStore({
    reducer: {
        home,
        todos
    }
});

export default store;