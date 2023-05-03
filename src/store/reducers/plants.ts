import { Plant } from '../types';
import { ADD_PLANT, UPDATE_PLANT, SET_PLANTS } from '../actions/plants';

const initialState: Plant[] = [];

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return [...state, action.plant];
    case UPDATE_PLANT:
      return state.map((plant) =>
        plant.id === action.id ? { ...plant, ...action.updates } : plant
      );
    case SET_PLANTS:
      return action.plants;
    default:
      return state;
  }
};

export default plantsReducer;
