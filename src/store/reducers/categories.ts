// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '../reducers';
// import { Action } from 'redux';
// import { fetchCategories } from '../../services/CategoryAPI';

// export const SET_CATEGORIES = 'SET_CATEGORIES';

// export const loadCategories = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
//   dispatch
// ) => {
//   const categories = await fetchCategories();
//   dispatch({
//     type: SET_CATEGORIES,
//     categories,
//   });
// };

import { SET_CATEGORIES } from '../actions/categories';

const initialState: string[] = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoriesReducer;

