import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let storeEnhancers;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    storeEnhancers = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
    storeEnhancers = applyMiddleware(thunk)
}

const store = createStore(
    rootReducer,
    storeEnhancers
);

export default store;