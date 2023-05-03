import { combineReducers } from 'redux';
import plantsReducer from './plants';

const rootReducer = combineReducers({
  plants: plantsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
