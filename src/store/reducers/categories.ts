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

