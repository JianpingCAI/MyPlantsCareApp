import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import plantReducer from '../reducers/plantReducer';

const rootReducer = combineReducers({
  plant: plantReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
