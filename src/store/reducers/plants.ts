import { Plant } from "../types";
import {
  ADD_PLANT,
  UPDATE_PLANT,
  SET_PLANTS,
  GET_PLANT,
} from "../actions/plants";
import { PlantActions } from "../actions/plants";

const initialState: Plant[] = [];

const plantsReducer = (state = initialState, action: PlantActions): Plant[] => {
  switch (action.type) {
    case ADD_PLANT:
      return [...state, action.plant];
    case UPDATE_PLANT:
      return state.map((plant) =>
        plant.id === action.id ? { ...plant, ...action.updates } : plant
      );
    case SET_PLANTS:
      return action.plants;
    case GET_PLANT:
      return action.plant ? [action.plant] : state;
    default:
      return state;
  }
};

export default plantsReducer;
