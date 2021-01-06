import { createStore , combineReducers , applyMiddleware } from 'redux';


//import the reducers.
import cakeReducer  from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import reduder from './user/userReducer';


//import thunk library.
import thunk from 'redux-thunk';


const combine = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    reducer : reduder
})

const store = createStore(combine , applyMiddleware(thunk));


export default store;