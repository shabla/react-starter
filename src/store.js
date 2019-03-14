import { configureStore } from 'redux-starter-kit';

import test from "./common/reducers/test.reducer"

const store = configureStore({
    reducer: {
        test
    }
});

export default store;